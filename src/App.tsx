import './App.css'

import { ClockIcon } from '@heroicons/react/24/outline'
import { format } from 'date-fns'
import { useCallback, useEffect, useState } from 'react'
import Div100vh from 'react-div-100vh'

import { AlertContainer } from './components/alerts/AlertContainer'
import { Alphabet } from './components/alphabet/Alphabet'
import { Cryptogram } from './components/cryptogram/Cryptogram'
import { DatePickerModal } from './components/modals/DatePickerModal'
import { HeartModal } from './components/modals/HeartModal'
import { InfoModal } from './components/modals/InfoModal'
import { MigrateStatsModal } from './components/modals/MigrateStatsModal'
import { SettingsModal } from './components/modals/SettingsModal'
import { ShareMessageModal } from './components/modals/ShareMessageModal'
import { StatsModal } from './components/modals/StatsModal'
import { Navbar } from './components/navbar/Navbar'
import {
  DATE_LOCALE,
  DISCOURAGE_INAPP_BROWSERS,
  LONG_ALERT_TIME_MS,
  MAX_CHALLENGES,
  MAX_HINTS,
  REVEAL_TIME_MS,
  WELCOME_INFO_MODAL_MS,
} from './constants/settings'
import {
  CORRECT_WORD_MESSAGE,
  DISCOURAGE_INAPP_BROWSER_TEXT,
  GAME_COPIED_MESSAGE,
  HARD_MODE_ALERT_MESSAGE,
  SHARE_FAILURE_TEXT,
  WIN_MESSAGES,
  YOU_HAVE_ALREADY_GUESSED_MESSAGE,
} from './constants/strings'
import { useAlert } from './context/AlertContext'
import { isInAppBrowser } from './lib/browser'
import {
  ALPHABET,
  encodePhrase,
  generateCryptogramHint,
  newCipher,
} from './lib/cipher'
import {
  Guess,
  getStoredIsHighContrastMode,
  loadGameStateFromLocalStorage,
  saveGameStateToLocalStorage,
  setStoredIsHighContrastMode,
} from './lib/localStorage'
import {
  getGameDate,
  getIsLatestGame,
  localeAwareUpperCase,
  setGameDate,
  solution,
  solutionGameDate,
  solutionIndex,
  solutionName,
} from './lib/quotes'
import { addStatsForCompletedGame, loadStats } from './lib/stats'
import { CharStatus } from './lib/statuses'

const cipher = newCipher(solutionIndex)
const isAndroid = /Android/i.test(navigator.userAgent)

const debug = (...args: any[]) => {
  console.log(args)
}

const encryptedQuote = {
  author: encodePhrase({ cipher, phrase: solution.author || '' }),
  quote: encodePhrase({ cipher, phrase: solution.quote }),
}
const encryptedLetters: string[] = []
const solutionLetters: string[] = []
const encryptedString: string = `${encryptedQuote.quote}${
  encryptedQuote.author ? encryptedQuote.author : ''
}`
encryptedString.split('').forEach((letter) => {
  if (cipher[letter] && !encryptedLetters.includes(letter)) {
    encryptedLetters.push(letter)
  }
})
const solutionString = `${solution.quote}${solution.author}`
solutionString
  .toLocaleUpperCase()
  .split('')
  .forEach((letter) => {
    if (ALPHABET.includes(letter) && !solutionLetters.includes(letter)) {
      solutionLetters.push(letter)
    }
  })
let userHasGuessedALetter = false
let userHasIncorrectlyGuessedALetter = false

function App() {
  const isLatestGame = getIsLatestGame()
  const gameDate = getGameDate()
  const prefersDarkMode = window.matchMedia(
    '(prefers-color-scheme: dark)'
  ).matches

  const { showError: showErrorAlert, showSuccess: showSuccessAlert } =
    useAlert()
  const [currentCipher, setCurrentCipher] = useState(cipher)
  const [isAlphabetShowing, setIsAlphabetShowing] = useState(!isAndroid)
  const [isGameWon, setIsGameWon] = useState(false)
  const [isHeartModalOpen, setIsHeartModalOpen] = useState(false)
  const [isInfoModalOpen, setIsInfoModalOpen] = useState(false)
  const [isSendMessageModalOpen, setIsSendMessageModalOpen] = useState(false)
  const [isStatsModalOpen, setIsStatsModalOpen] = useState(false)

  const [isDatePickerModalOpen, setIsDatePickerModalOpen] = useState(false)
  const [isMigrateStatsModalOpen, setIsMigrateStatsModalOpen] = useState(false)
  const [isSettingsModalOpen, setIsSettingsModalOpen] = useState(false)
  const [isGameLost, setIsGameLost] = useState(false)
  const [isDarkMode, setIsDarkMode] = useState(
    localStorage.getItem('theme')
      ? localStorage.getItem('theme') === 'dark'
      : prefersDarkMode
      ? true
      : false
  )
  const [isHighContrastMode, setIsHighContrastMode] = useState(
    getStoredIsHighContrastMode()
  )
  const [isRevealing, setIsRevealing] = useState(false)
  const [currentLetter, setCurrentLetter] = useState('')
  const [incorrectGuesses, setIncorrectGuesses] = useState<Guess[]>([])
  const [guesses, setGuesses] = useState<Guess[]>(() => {
    const loaded = loadGameStateFromLocalStorage(isLatestGame)
    if (loaded?.solution.quote !== solution.quote) {
      return []
    }
    const gameWasWon = loaded?.gameWasWon
    if (gameWasWon) {
      setIsGameWon(true)
    }
    if (loaded.guesses.length === MAX_CHALLENGES && !gameWasWon) {
      setIsGameLost(true)
      showErrorAlert(CORRECT_WORD_MESSAGE(solution), {
        persist: true,
      })
    }
    setTimeout(() => {
      // restore incorrect guesses
      loaded.incorrectGuesses.forEach(({ input, label }) => {
        onChar(input, label as string)
      })
      // render all the (correct) guesses
      guesses
        .filter(({ status }) => status === 'correct')
        .forEach(({ input }) => {
          Object.keys(cipher).forEach((key) => {
            if (input === cipher[key].decrypted) {
              onChar(cipher[key].decrypted, key)
            } else {
              debug(
                'this was an incorrect guess, we arent sure where to put it ',
                input
              )
            }
          })
        })
      setIncorrectGuesses(loaded.incorrectGuesses)
    }, 100)
    return loaded.guesses
  })

  const [stats, setStats] = useState(() => loadStats())

  const [isHardMode, setIsHardMode] = useState(
    localStorage.getItem('gameMode')
      ? localStorage.getItem('gameMode') === 'hard'
      : false
  )

  useEffect(() => {
    // if no game state on load,
    // show the user the how-to info modal
    if (!loadGameStateFromLocalStorage(true)) {
      setTimeout(() => {
        setIsInfoModalOpen(true)
      }, WELCOME_INFO_MODAL_MS)
    }
  })

  useEffect(() => {
    DISCOURAGE_INAPP_BROWSERS &&
      isInAppBrowser() &&
      showErrorAlert(DISCOURAGE_INAPP_BROWSER_TEXT, {
        persist: false,
        durationMs: 7000,
      })
  }, [showErrorAlert])

  useEffect(() => {
    if (isDarkMode) {
      document.documentElement.classList.add('dark')
    } else {
      document.documentElement.classList.remove('dark')
    }

    if (isHighContrastMode) {
      document.documentElement.classList.add('high-contrast')
    } else {
      document.documentElement.classList.remove('high-contrast')
    }
  }, [isDarkMode, isHighContrastMode])

  const handleDarkMode = (isDark: boolean) => {
    setIsDarkMode(isDark)
    const colorMode = isDark ? 'dark' : 'light'
    localStorage.setItem('theme', colorMode)
    window.gtag('event', 'unlock_achievement', {
      achievement_id: `choose_${colorMode}_mode`,
    })
  }

  const handleHardMode = (isHard: boolean) => {
    if (guesses.length === 0 || localStorage.getItem('gameMode') === 'hard') {
      setIsHardMode(isHard)
      const gameMode = isHard ? 'hard' : 'normal'
      localStorage.setItem('gameMode', gameMode)
      window.gtag('event', 'unlock_achievement', {
        achievement_id: `choose_${gameMode}_mode`,
      })
    } else {
      showErrorAlert(HARD_MODE_ALERT_MESSAGE)
    }
  }

  const handleHighContrastMode = (isHighContrast: boolean) => {
    const colorMode = isHighContrast ? 'high_contrast' : 'normal_contrast'
    setIsHighContrastMode(isHighContrast)
    setStoredIsHighContrastMode(isHighContrast)
    window.gtag('event', 'unlock_achievement', {
      achievement_id: `choose_${colorMode}`,
    })
  }

  useEffect(() => {
    saveGameStateToLocalStorage(getIsLatestGame(), {
      guesses,
      gameWasWon: isGameWon,
      incorrectGuesses,
      solution,
    })
  }, [guesses, incorrectGuesses, isGameWon])

  useEffect(() => {
    if (isGameWon) {
      const winMessage =
        WIN_MESSAGES[Math.floor(Math.random() * WIN_MESSAGES.length)]
      const delayMs = REVEAL_TIME_MS

      showSuccessAlert(winMessage, {
        delayMs,
        onClose: () => setIsStatsModalOpen(true),
      })
    }

    if (isGameLost) {
      setTimeout(() => {
        setIsStatsModalOpen(true)
      }, REVEAL_TIME_MS)
    }
  }, [isGameWon, isGameLost, showSuccessAlert])

  const onChar = useCallback(
    (input: string, ariaLabel: string) => {
      if (isGameWon || isGameLost) {
        setIsAlphabetShowing(false)
        return
      }
      debug('input', input, 'ariaLabel', ariaLabel)
      const label = ariaLabel || currentLetter
      if (
        label &&
        input &&
        currentCipher[label] &&
        input !== currentCipher[label].guesses[0]
      ) {
        const updatedCipher = { ...currentCipher }

        // let alreadyGuessed = false
        Object.keys(updatedCipher).forEach((key) => {
          if (label !== key && updatedCipher[key].guesses[0] === input) {
            // alreadyGuessed = true
            showErrorAlert(YOU_HAVE_ALREADY_GUESSED_MESSAGE(input, key), {
              persist: false,
            })
          }
        })

        updatedCipher[label].guesses = [input, ...updatedCipher[label].guesses]
        let status: CharStatus | undefined = undefined
        if (input === updatedCipher[label].decrypted) {
          status = 'correct'
          updatedCipher[label].status = status
          if (!userHasGuessedALetter) {
            userHasGuessedALetter = true
            window.gtag('event', 'unlock_achievement', {
              achievement_id: 'make_correct_guess',
            })
          }
        } else if (solutionLetters.includes(input)) {
          status = 'present'
          updatedCipher[label].status = status
        } else {
          status = 'absent'
          updatedCipher[label].status = status
        }
        setGuesses([...guesses, { input, status }])
        if (input !== updatedCipher[label].decrypted) {
          if (!userHasIncorrectlyGuessedALetter) {
            userHasIncorrectlyGuessedALetter = true
            window.gtag('event', 'unlock_achievement', {
              achievement_id: 'make_incorrect_guess',
            })
          }
          debug('This was an incorrect guess', input)
          setIncorrectGuesses([...incorrectGuesses, { input, status, label }])
          setIsRevealing(true)
        }
        debug('updated updatedCipher', updatedCipher)
        setCurrentCipher(updatedCipher)
      }
      if (ariaLabel) {
        setIsAlphabetShowing(true)
        setCurrentLetter(ariaLabel)
      }
      //  setCurrentGuess(`${currentGuess}${value}`)

      let areAllLettersGuessed = true
      encryptedLetters.forEach((key) => {
        if (cipher[key] && cipher[key].decrypted !== cipher[key].guesses[0]) {
          areAllLettersGuessed = false
        }
      })
      if (areAllLettersGuessed) {
        window.gtag('event', 'level_end', {
          level_name: `Cryptogram ${solutionName}`,
          success: true,
        })
        debug('All the letters have been guessed', guesses)
        if (isLatestGame) {
          // TODO this is causing the stats to be multiples of page reloads
          setStats(
            addStatsForCompletedGame(
              solutionName,
              stats,
              incorrectGuesses.length
            )
          )
        }
        setIsGameWon(true)
      }

      if (incorrectGuesses.length > MAX_CHALLENGES - 1) {
        debug(
          'Incorrect guesses are more than the max',
          incorrectGuesses,
          MAX_CHALLENGES
        )
        window.gtag('event', 'level_end', {
          level_name: `Cryptogram ${solutionName}`,
          success: false,
        })
        if (isLatestGame) {
          setStats(
            addStatsForCompletedGame(
              solutionName,
              stats,
              incorrectGuesses.length + 1
            )
          )
        }
        setIsGameLost(true)
        showErrorAlert(CORRECT_WORD_MESSAGE(solution), {
          persist: true,
          delayMs: REVEAL_TIME_MS,
        })
      }
    },
    [
      currentLetter,
      currentCipher,
      guesses,
      incorrectGuesses,
      isGameWon,
      isGameLost,
      isLatestGame,
      showErrorAlert,
      stats,
    ]
  )

  const onDelete = useCallback(() => {
    debug('onDelete', currentLetter, currentCipher[currentLetter].guesses)
    if (
      currentLetter &&
      currentCipher[currentLetter].guesses &&
      currentCipher[currentLetter].guesses.length
    ) {
      const updatedCipher = { ...currentCipher }
      const removedGuess = currentCipher[currentLetter].guesses[0]
      debug('removedGuess', removedGuess)

      updatedCipher[currentLetter].guesses = currentCipher[
        currentLetter
      ].guesses.slice(1, currentCipher[currentLetter].guesses.length)
      updatedCipher[currentLetter].status = undefined
      // could also remove from game guesses
      // setGuesses(guesses.slice(1, guesses.length))
      debug('updated updatedCipher after undo', updatedCipher)
      setCurrentCipher(updatedCipher)
    }
  }, [currentLetter, currentCipher])

  const onEnter = useCallback(() => {
    /*
     if (isGameWon || isGameLost) {
       return
     }

     if (!(unicodeLength(currentGuess) === solution.length)) {
       setCurrentRowClass('jiggle')
       return showErrorAlert(NOT_ENOUGH_LETTERS_MESSAGE, {
         onClose: clearCurrentRowClass,
       })
     }

     if (!isWordInWordList(currentGuess)) {
       setCurrentRowClass('jiggle')
       return showErrorAlert(WORD_NOT_FOUND_MESSAGE, {
         onClose: clearCurrentRowClass,
       })
     }

     // enforce hard mode - all guesses must contain all previously revealed letters
     if (isHardMode) {
       const firstMissingReveal = findFirstUnusedReveal(currentGuess, guesses)
       if (firstMissingReveal) {
         setCurrentRowClass('jiggle')
         return showErrorAlert(firstMissingReveal, {
           onClose: clearCurrentRowClass,
         })
       }
     }

     setIsRevealing(true)
     // turn this back off after all
     // chars have been revealed
     setTimeout(() => {
       setIsRevealing(false)
     }, REVEAL_TIME_MS * solution.length)
     */
  }, [])

  const setHint = () => {
    let hintCount = 0
    let hint = generateCryptogramHint(cipher, encryptedLetters, solutionIndex)
    while (
      hintCount <= (isHardMode ? MAX_HINTS : 10) &&
      hint &&
      hint.keyLetter &&
      hint.originalLetter &&
      currentCipher[hint.keyLetter].guesses[0] === hint.originalLetter
    ) {
      debug('hint is ', hint)
      hintCount++
      hint = generateCryptogramHint(
        cipher,
        encryptedLetters,
        solutionIndex + hintCount
      )
    }
    if (
      hint &&
      hint.keyLetter &&
      hint.originalLetter &&
      currentCipher[hint.keyLetter].guesses[0] !== hint.originalLetter
    ) {
      onChar(hint?.originalLetter, hint?.keyLetter)
      window.gtag('event', 'unlock_achievement', {
        achievement_id: 'use_hint',
      })
    }
    if (hintCount >= 10) {
      window.gtag('event', 'unlock_achievement', {
        achievement_id: 'exhausted_hints',
      })
      showErrorAlert('No more hints available.', {
        persist: false,
      })
    }
  }

  useEffect(() => {
    const listener = (e: KeyboardEvent) => {
      debug('got an event code', e.code)
      debug('got an event key', e.key)
      if (e.code === 'Enter') {
        onEnter()
      } else if (e.code === 'Backspace') {
        onDelete()
      } else {
        const key = localeAwareUpperCase(e.key)
        // TODO: check this test if the range works with non-english letters
        if (key.length === 1 && key >= 'A' && key <= 'Z') {
          const label = (e?.target as HTMLButtonElement)?.ariaLabel || ''

          onChar(key, label)
        }
      }
    }
    window.addEventListener('keyup', listener)
    return () => {
      window.removeEventListener('keyup', listener)
    }
  }, [onEnter, onDelete, onChar])

  return (
    <Div100vh>
      <div className="flex h-full flex-col">
        <Navbar
          setHint={setHint}
          setIsHeartModalOpen={setIsHeartModalOpen}
          setIsInfoModalOpen={setIsInfoModalOpen}
          setIsSendMessageModalOpen={setIsSendMessageModalOpen}
          setIsStatsModalOpen={setIsStatsModalOpen}
          setIsDatePickerModalOpen={setIsDatePickerModalOpen}
          setIsSettingsModalOpen={setIsSettingsModalOpen}
        />

        {!isLatestGame && (
          <div className="flex items-center justify-center">
            <ClockIcon className="h-6 w-6 stroke-gray-600 dark:stroke-gray-300" />
            <p className="text-base text-gray-600 dark:text-gray-300">
              {format(gameDate, 'd MMMM yyyy', { locale: DATE_LOCALE })}
            </p>
          </div>
        )}

        <div className="mx-auto flex w-full grow flex-col px-1 pb-8 pt-2 sm:px-6 md:max-w-7xl lg:px-8 short:pb-2 short:pt-2">
          <div className="flex grow flex-col justify-center pb-6 short:pb-2">
            <Cryptogram
              onChar={onChar}
              cipher={currentCipher}
              encryptedQuote={encryptedQuote}
              isRevealing={isRevealing}
              isHardMode={isHardMode}
            />
          </div>
          <Alphabet
            cipher={currentCipher}
            onChar={onChar}
            onDelete={onDelete}
            onEnter={onEnter}
            isRevealing={isRevealing}
            isShowing={isAlphabetShowing}
          />
          <InfoModal
            isOpen={isInfoModalOpen}
            handleClose={() => setIsInfoModalOpen(false)}
          />
          <HeartModal
            isOpen={isHeartModalOpen}
            handleClose={() => setIsHeartModalOpen(false)}
          />
          <StatsModal
            isOpen={isStatsModalOpen}
            handleClose={() => setIsStatsModalOpen(false)}
            guesses={guesses}
            gameStats={stats}
            incorrectGuesses={incorrectGuesses}
            isLatestGame={isLatestGame}
            isGameLost={isGameLost}
            isGameWon={isGameWon}
            handleShareToClipboard={() => showSuccessAlert(GAME_COPIED_MESSAGE)}
            handleShareFailure={() =>
              showErrorAlert(SHARE_FAILURE_TEXT, {
                durationMs: LONG_ALERT_TIME_MS,
              })
            }
            handleMigrateStatsButton={() => {
              window.gtag('event', 'unlock_achievement', {
                achievement_id: 'click_transfer_stats',
              })
              setIsStatsModalOpen(false)
              setIsMigrateStatsModalOpen(true)
            }}
            isHardMode={isHardMode}
            isDarkMode={isDarkMode}
            isHighContrastMode={isHighContrastMode}
            numberOfGuessesMade={incorrectGuesses.length}
          />
          <DatePickerModal
            isOpen={isDatePickerModalOpen}
            initialDate={solutionGameDate}
            handleSelectDate={(d) => {
              setIsDatePickerModalOpen(false)
              setGameDate(d)
            }}
            handleClose={() => setIsDatePickerModalOpen(false)}
          />
          <ShareMessageModal
            isOpen={isSendMessageModalOpen}
            handleClose={() => setIsSendMessageModalOpen(false)}
          />
          <MigrateStatsModal
            isOpen={isMigrateStatsModalOpen}
            handleClose={() => setIsMigrateStatsModalOpen(false)}
          />
          <SettingsModal
            isOpen={isSettingsModalOpen}
            handleClose={() => setIsSettingsModalOpen(false)}
            isHardMode={isHardMode}
            handleHardMode={handleHardMode}
            isDarkMode={isDarkMode}
            handleDarkMode={handleDarkMode}
            isHighContrastMode={isHighContrastMode}
            handleHighContrastMode={handleHighContrastMode}
          />
          <AlertContainer />
        </div>
      </div>
    </Div100vh>
  )
}

export default App
