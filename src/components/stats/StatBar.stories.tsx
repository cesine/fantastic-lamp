import React from 'react'

import { StatBar } from './StatBar'

export default {
  title: 'StatBar',
  component: StatBar,
}

export const Default = () => (
  <StatBar
    gameStats={{
      totalGames: 10,
      successRate: 50,
      currentStreak: 2,
      bestStreak: 5,
      winDistribution: [5, 5],
      gamesFailed: 5,
    }}
  />
)
