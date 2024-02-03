import React from 'react'

import { Histogram } from './Histogram'

export default {
  title: 'Histogram',
  component: Histogram,
}

export const Default = () => (
  <Histogram
    gameStats={{
      totalGames: 10,
      successRate: 50,
      currentStreak: 2,
      bestStreak: 5,
      winDistribution: [10, 20, 30, 40, 50],
      gamesFailed: 5,
    }}
    isLatestGame={true}
    isGameWon={true}
    numberOfGuessesMade={3}
  />
)
