import './App.css'

import { ClockIcon } from '@heroicons/react/24/outline'
import { format } from 'date-fns'
import { useCallback, useEffect, useState } from 'react'
import Div100vh from 'react-div-100vh'

import { AlertContainer } from './components/alerts/AlertContainer'
import { Alphabet } from './components/alphabet/Alphabet'
import { Cryptogram } from './components/cryptogram/Cryptogram'
import { DatePickerModal } from './components/modals/DatePickerModal'
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
} from './constants/strings'
import { useAlert } from './context/AlertContext'
import { isInAppBrowser } from './lib/browser'
import { encodePhrase, generateCryptogramHint, newCipher } from './lib/cipher'
import {
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
} from './lib/quotes'
import { addStatsForCompletedGame, loadStats } from './lib/stats'

const cipher = newCipher(solutionIndex)
const isMobile = /Android/i.test(navigator.userAgent)

const debug = (...args: any[]) => {
  if (isMobile) {
    alert(args.join(' '))
  } else {
    console.log(args)
  }
}

const encryptedQuote = encodePhrase({ cipher, phrase: solution })

function App() {
  const isLatestGame = getIsLatestGame()
  const gameDate = getGameDate()
  const prefersDarkMode = window.matchMedia(
    '(prefers-color-scheme: dark)'
  ).matches

  const { showError: showErrorAlert, showSuccess: showSuccessAlert } =
    useAlert()
  const [currentCipher, setCurrentCipher] = useState(cipher)
  const [isGameWon, setIsGameWon] = useState(false)
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
  const [guesses, setGuesses] = useState<string[]>(() => {
    const loaded = loadGameStateFromLocalStorage(isLatestGame)
    if (loaded?.solution !== solution) {
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
      // render all the guesses
      Object.keys(cipher).forEach((key) => {
        if (guesses.includes(cipher[key].decrypted)) {
          onChar(key, cipher[key].decrypted)
        }
      })
    }, 100)
    return loaded.guesses
  })
  const [incorrectGuesses, setIncorrectGuesses] = useState<string[]>([])

  const [stats, setStats] = useState(() => loadStats())

  const [isHardMode, setIsHardMode] = useState(
    localStorage.getItem('gameMode')
      ? localStorage.getItem('gameMode') === 'hard'
      : true
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
    localStorage.setItem('theme', isDark ? 'dark' : 'light')
  }

  const handleHardMode = (isHard: boolean) => {
    if (guesses.length === 0 || localStorage.getItem('gameMode') === 'hard') {
      setIsHardMode(isHard)
      localStorage.setItem('gameMode', isHard ? 'hard' : 'normal')
    } else {
      showErrorAlert(HARD_MODE_ALERT_MESSAGE)
    }
  }

  const handleHighContrastMode = (isHighContrast: boolean) => {
    setIsHighContrastMode(isHighContrast)
    setStoredIsHighContrastMode(isHighContrast)
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
      const delayMs = REVEAL_TIME_MS * 5

      showSuccessAlert(winMessage, {
        delayMs,
        onClose: () => setIsStatsModalOpen(true),
      })
    }

    if (isGameLost) {
      setTimeout(
        () => {
          setIsStatsModalOpen(true)
        },
        (5 + 1) * REVEAL_TIME_MS
      )
    }
  }, [isGameWon, isGameLost, showSuccessAlert])

  const onChar = useCallback(
    (input: string, ariaLabel: string) => {
      if (isGameWon || isGameLost) {
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

        updatedCipher[label].guesses = [input, ...updatedCipher[label].guesses]
        setGuesses([...guesses, input])
        if (input !== updatedCipher[label].decrypted) {
          debug('This was an incorrect guess', input)
          setIncorrectGuesses([...incorrectGuesses, input])
          setIsRevealing(true)
        }
        debug('updated updatedCipher', updatedCipher)
        setCurrentCipher(updatedCipher)
      }
      if (ariaLabel) {
        setCurrentLetter(ariaLabel)
      }
      //  setCurrentGuess(`${currentGuess}${value}`)

      let areAllLettersGuessed = true
      let encryptedLetters: string[] = []
      encryptedQuote.split('').forEach((letter) => {
        if (!encryptedLetters.includes(letter)) {
          encryptedLetters.push(letter)
        }
      })
      encryptedLetters.forEach((key) => {
        if (cipher[key] && cipher[key].decrypted !== cipher[key].guesses[0]) {
          areAllLettersGuessed = false
        }
      })
      if (areAllLettersGuessed) {
        debug('All the letters have been guessed', guesses)
        if (isLatestGame) {
          setStats(addStatsForCompletedGame(stats, guesses.length))
        }
        setIsGameWon(true)
      }

      if (incorrectGuesses.length > MAX_CHALLENGES - 1) {
        debug(
          'Incorrect guesses are more than the max',
          incorrectGuesses,
          MAX_CHALLENGES
        )
        if (isLatestGame) {
          setStats(addStatsForCompletedGame(stats, incorrectGuesses.length + 1))
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
    const hint = generateCryptogramHint(cipher, solution, 2)
    debug('hint is ', hint)
    if (hint && hint.keyLetter && hint.originalLetter) {
      onChar(hint?.originalLetter, hint?.keyLetter)
    }
  }

  useEffect(() => {
    const listener = (e: KeyboardEvent) => {
      debug('got an event code', e.code)
      debug('got an event key', e.key)
      debug('got an event charCode', e.charCode)
      debug('got an event altKey', e.altKey)
      debug('got an event keyCode', e.keyCode)
      debug('got an event which', e.which)
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
            />
          </div>
          <Alphabet
            cipher={currentCipher}
            onChar={onChar}
            onDelete={onDelete}
            onEnter={onEnter}
            isRevealing={isRevealing}
          />
          <InfoModal
            isOpen={isInfoModalOpen}
            handleClose={() => setIsInfoModalOpen(false)}
          />
          <StatsModal
            isOpen={isStatsModalOpen}
            handleClose={() => setIsStatsModalOpen(false)}
            solution={solution}
            guesses={guesses}
            gameStats={stats}
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
              setIsStatsModalOpen(false)
              setIsMigrateStatsModalOpen(true)
            }}
            isHardMode={isHardMode}
            isDarkMode={isDarkMode}
            isHighContrastMode={isHighContrastMode}
            numberOfGuessesMade={guesses.length}
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
