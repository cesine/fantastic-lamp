import {
  addDays,
  differenceInDays,
  formatISO,
  parseISO,
  startOfDay,
} from 'date-fns'
import { default as GraphemeSplitter } from 'grapheme-splitter'

import { QUOTES } from '../constants/quotelist'
import { getToday } from './dateutils'

// 1 January 2024 Game Epoch
export const firstGameDate = new Date(2024, 0)
export const periodInDays = 1

export const unicodeSplit = (quote: string) => {
  return new GraphemeSplitter().splitGraphemes(quote)
}

export const unicodeLength = (quote: string) => {
  return unicodeSplit(quote).length
}

export const localeAwareLowerCase = (text: string) => {
  return process.env.REACT_APP_LOCALE_STRING
    ? text.toLocaleLowerCase(process.env.REACT_APP_LOCALE_STRING)
    : text.toLowerCase()
}

export const localeAwareUpperCase = (text: string) => {
  return process.env.REACT_APP_LOCALE_STRING
    ? text.toLocaleUpperCase(process.env.REACT_APP_LOCALE_STRING)
    : text.toUpperCase()
}

export const getLastGameDate = (today: Date) => {
  const t = startOfDay(today)
  let daysSinceLastGame = differenceInDays(firstGameDate, t) % periodInDays
  return addDays(t, -daysSinceLastGame)
}

export const getNextGameDate = (today: Date) => {
  return addDays(getLastGameDate(today), periodInDays)
}

export const isValidGameDate = (date: Date) => {
  if (date < firstGameDate || date > getToday()) {
    return false
  }

  return differenceInDays(firstGameDate, date) % periodInDays === 0
}

export const getIndex = (gameDate: Date) => {
  let start = firstGameDate
  let index = -1
  do {
    index++
    start = addDays(start, periodInDays)
  } while (start <= gameDate)

  return index
}

export const getQuoteOfDay = (index: number): Solution => {
  if (index < 0) {
    throw new Error('Invalid index')
  }

  return {
    author: localeAwareUpperCase(QUOTES[index % QUOTES.length].author),
    quote: localeAwareUpperCase(QUOTES[index % QUOTES.length].quote),
  }
}

export const getSolution = (gameDate: Date) => {
  const queryParams = new URLSearchParams(window.location.search)
  const gameFromQueryParams = loadGameStateFromQueryParam(queryParams)

  const nextGameDate = getNextGameDate(gameDate)
  const index = gameFromQueryParams.index
    ? gameFromQueryParams.index
    : getIndex(gameDate)
  const quoteOfTheDay = gameFromQueryParams.solution
    ? gameFromQueryParams.solution
    : getQuoteOfDay(index)

  const solutionName = `${index} ${quoteOfTheDay.quote}`.slice(0, 50)
  window.gtag('event', 'level_start', {
    level_name: `Cryptogram ${solutionName}`,
  })
  return {
    message: gameFromQueryParams.message ? gameFromQueryParams.message : '',
    solution: quoteOfTheDay,
    solutionGameDate: gameDate,
    solutionIndex: index,
    solutionName,
    tomorrow: nextGameDate.valueOf(),
  }
}

export const getGameDate = () => {
  if (getIsLatestGame()) {
    return getToday()
  }

  const parsed = new URLSearchParams(window.location.search)
  try {
    const d = startOfDay(parseISO(parsed.get('d')!.toString()))
    if (d >= getToday() || d < firstGameDate) {
      setGameDate(getToday())
    }
    return d
  } catch (e) {
    console.log(e)
    return getToday()
  }
}

export const setGameDate = (d: Date) => {
  try {
    const path = window.location.pathname
    const queryParams = new URLSearchParams(window.location.search)
    if (d < getToday()) {
      queryParams.set('d', formatISO(d, { representation: 'date' }))
      // move to using the date as which puzzle to load rather than the code
      queryParams.delete('code')
    } else {
      queryParams.delete('d')
      // move to using the date as which puzzle to load rather than the code
      queryParams.delete('code')
    }
    window.location.href = `${path}?${queryParams.toString()}`
  } catch (e) {
    console.log(e)
  }
}

export const getIsLatestGame = () => {
  const parsed = new URLSearchParams(window.location.search)
  // TODO use URLparams and return true if no d or code is set
  return parsed === null || !parsed.get('d')
}

export type Solution = {
  author?: string
  quote: string
}

export type QueryParamGameState = {
  guesses: string[]
  index: number
  message?: string
  solution: Solution
}

const emptyGame = { guesses: [], index: 1, solution: { author: '', quote: '' } }

export const loadGameStateFromQueryParam = (
  queryParams: URLSearchParams
): QueryParamGameState => {
  try {
    const code = queryParams.get('code')
    const stateString = code ? atob(decodeURIComponent(code)) : '{}'
    const state = stateString
      ? (JSON.parse(stateString) as QueryParamGameState)
      : emptyGame
    if (state.solution) {
      console.log('Loaded a game from query params', state)
      window.gtag('event', 'unlock_achievement', {
        achievement_id: 'open_shared_encrypted_message',
      })
    }
    return state
  } catch (err) {
    console.warn('Error laoding game from query params, ignoring it', err)
  }
  return emptyGame
}

export const shareGameToQueryParams = ({
  seed,
  message,
}: {
  seed: number
  message: string
}) => {
  const state = {
    guesses: [],
    index: seed,
    message: 'An encrypted message',
    solution: {
      author: '',
      quote: message,
    },
  }

  const code = btoa(JSON.stringify(state))
  console.log('code', code, state)
  const queryParams = new URLSearchParams(
    '?utm_source=beta_app&utm_medium=share_button&utm_campaign=encrypted_message'
  )
  queryParams.set('code', encodeURIComponent(code))
  const link = `${window.location.origin}${
    window.location.pathname
  }?${queryParams.toString()}`

  return link
}

export const {
  message,
  solution,
  solutionGameDate,
  solutionIndex,
  solutionName,
  tomorrow,
} = getSolution(getGameDate())
