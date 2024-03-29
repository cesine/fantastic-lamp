import { UAParser } from 'ua-parser-js'

import { MAX_INCORRECT_GUESSES } from '../constants/settings'
import { GAME_TITLE } from '../constants/strings'
import { Guess } from './localStorage'
import { message, solutionIndex } from './quotes'

const webShareApiDeviceTypes: string[] = ['mobile', 'smarttv', 'wearable']
const parser = new UAParser()
const browser = parser.getBrowser()
const device = parser.getDevice()

export const shareStatus = (
  guesses: Guess[],
  incorrectGuesses: Guess[],
  lost: boolean,
  isHardMode: boolean,
  isDarkMode: boolean,
  isHighContrastMode: boolean,
  handleShareToClipboard: () => void,
  handleShareFailure: () => void
) => {
  const queryParams = new URLSearchParams(window.location.search)
  queryParams.set('utm_source', 'beta_app')
  queryParams.set('utm_medium', 'share_button')
  queryParams.set('utm_campaign', 'share')
  const link = `${window.location.origin}${
    window.location.pathname
  }?${queryParams.toString()}`

  const textToShare =
    `I solved ${GAME_TITLE} ${message} ${solutionIndex} ${
      lost ? 'X' : incorrectGuesses.length
    }/${MAX_INCORRECT_GUESSES}${isHardMode ? '*' : ''}\n\n` +
    generateEmojiGrid(guesses, getEmojiTiles(isDarkMode, isHighContrastMode)) +
    `\n${link}`

  const shareData = { text: textToShare }

  let shareSuccess = false

  try {
    if (attemptShare(shareData)) {
      navigator.share(shareData)
      shareSuccess = true
      window.gtag('event', 'share', {
        method: 'Navigator Share API',
        content_type: 'text',
        item_id: `${message} ${solutionIndex}`,
      })
    }
  } catch (error) {
    shareSuccess = false
  }

  try {
    if (!shareSuccess) {
      if (navigator.clipboard) {
        navigator.clipboard
          .writeText(textToShare)
          .then(() => {
            window.gtag('event', 'share', {
              method: 'Navigator Clipboard API',
              content_type: 'text',
              item_id: `${message} ${solutionIndex}`,
            })
            handleShareToClipboard()
          })
          .catch(() => {
            // TODO capture errors in gtag
            handleShareFailure()
          })
      } else {
        handleShareFailure()
      }
    }
  } catch (error) {
    handleShareFailure()
  }
}

export const generateEmojiGrid = (guesses: Guess[], tiles: string[]) => {
  return (
    guesses.map(({ input }) => input).join('') +
    '\n' +
    guesses
      .map(({ status }) => {
        if (status === 'correct') {
          return tiles[0]
        } else if (status === 'present') {
          return tiles[1]
        } else if (status === 'absent') {
          return tiles[2]
        }
        return ' '
      })
      .join('')
  )
}

const attemptShare = (shareData: object) => {
  return (
    // Deliberately exclude Firefox Mobile, because its Web Share API isn't working correctly
    browser.name?.toUpperCase().indexOf('FIREFOX') === -1 &&
    webShareApiDeviceTypes.indexOf(device.type ?? '') !== -1 &&
    navigator.canShare &&
    navigator.canShare(shareData) &&
    navigator.share
  )
}

export const getEmojiTiles = (
  isDarkMode: boolean,
  isHighContrastMode: boolean
) => {
  let tiles: string[] = []
  tiles.push(isHighContrastMode ? '🟧' : '🟩')
  tiles.push(isHighContrastMode ? '🟦' : '🟨')
  tiles.push(isDarkMode ? '⬛' : '⬜')
  return tiles
}
