// CurrentRow.stories.tsx
import React from 'react'

import { CurrentRow } from './CurrentRow'

export default {
  title: 'CurrentRow',
  component: CurrentRow,
}

export const Default = () => (
  <CurrentRow guess="guess" className="example-class" />
)

export const WithLongGuess = () => (
  <CurrentRow guess="longer guess" className="example-class" />
)
