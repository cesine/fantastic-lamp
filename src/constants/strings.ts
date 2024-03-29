import { Solution } from '../lib/quotes'

export const GAME_TITLE = process.env.REACT_APP_GAME_NAME!

export const WIN_MESSAGES = ['Great Job!', 'Awesome', 'Well done!']
export const GAME_COPIED_MESSAGE = 'Game copied to clipboard'
export const NOT_ENOUGH_LETTERS_MESSAGE = 'Not enough letters'
export const WORD_NOT_FOUND_MESSAGE = 'Word not found'
export const HARD_MODE_ALERT_MESSAGE =
  'Hard Mode can be enabled only at the start!'
export const HARD_MODE_DESCRIPTION =
  '"In hard mode, tile colors remain neutral, offering no feedback on correct or incorrect guesses." '
export const HIGH_CONTRAST_MODE_DESCRIPTION = 'For improved color vision'
export const YOU_HAVE_ALREADY_GUESSED_MESSAGE = (
  input: string,
  decryptedLetter: string
) => `You have already guessed this letter: ${input} for ${decryptedLetter}.`
export const WARNING_REMAINING_GUESSES = (
  incorrectGuesses: number,
  remainingGuesses: number
) =>
  `You have used ${incorrectGuesses} guesses - you have ${remainingGuesses} left.`
export const CORRECT_WORD_MESSAGE = (solution: Solution) =>
  `The quote was ${solution.quote}${solution.author ? ' - ' : ''}${solution.author}`
export const WRONG_SPOT_MESSAGE = (guess: string, position: number) =>
  `Must use ${guess} in position ${position}`
export const ENTER_TEXT = 'Enter'
export const DELETE_TEXT = 'Delete'
export const STATISTICS_TITLE = 'Statistics'
export const GUESS_DISTRIBUTION_TEXT = 'Guess Distribution'
export const NEW_WORD_TEXT = 'New quote in'
export const SHARE_TEXT = 'Share'
export const SHARE_FAILURE_TEXT =
  'Unable to share the results. This feature is available only in secure contexts (HTTPS), in some or all supporting browsers.'
export const MIGRATE_BUTTON_TEXT = 'Transfer'
export const MIGRATE_DESCRIPTION_TEXT =
  'Click here to transfer your statistics to a new device.'
export const TOTAL_TRIES_TEXT = 'Total tries'
export const SUCCESS_RATE_TEXT = 'Success rate'
export const CURRENT_STREAK_TEXT = 'Current streak'
export const BEST_STREAK_TEXT = 'Best streak'
export const DISCOURAGE_INAPP_BROWSER_TEXT =
  "You are using an embedded browser and may experience problems sharing or saving your results. We encourage you rather to use your device's default browser."

export const DATEPICKER_TITLE = 'Choose a past date'
export const DATEPICKER_CHOOSE_TEXT = 'Choose'
export const DATEPICKER_TODAY_TEXT = 'today'
export const ARCHIVE_GAMEDATE_TEXT = 'Game date'
