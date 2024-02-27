// Key.stories.tsx
import React from 'react'

import { Letter } from './Letter'

export default {
  title: 'Letter',
  component: Letter,
}

export const Default = () => <Letter alpha="E" randomkey="A" />

export const WithStatusAbsent = () => (
  <Letter alpha="A" randomkey="B" status={'absent'} />
)

export const WithStatusPresent = () => (
  <Letter alpha="A" randomkey="B" status={'present'} />
)

export const WithStatusCorrect = () => (
  <Letter alpha="A" randomkey="B" status={'correct'} />
)

export const WithChildren = () => (
  <Letter alpha="A" randomkey="C">
    <span>Child</span>
  </Letter>
)
