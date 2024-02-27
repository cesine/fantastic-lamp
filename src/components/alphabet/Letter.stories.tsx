// Key.stories.tsx
import React from 'react'

import { Letter } from './Letter'

export default {
  title: 'Letter',
  component: Letter,
}

export const Default = () => (
  <Letter
    encryptedValue="E"
    decryptedValue="A"
    onClick={(value) => console.log('onClick', value)}
  />
)

export const WithStatusAbsent = () => (
  <Letter
    encryptedValue="A"
    decryptedValue="B"
    status={'absent'}
    onClick={(value) => console.log('onClick', value)}
  />
)

export const WithStatusPresent = () => (
  <Letter
    encryptedValue="A"
    decryptedValue="B"
    status={'present'}
    onClick={(value) => console.log('onClick', value)}
  />
)

export const WithStatusCorrect = () => (
  <Letter
    encryptedValue="A"
    decryptedValue="B"
    status={'correct'}
    onClick={(value) => console.log('onClick', value)}
  />
)

export const WithChildren = () => (
  <Letter
    encryptedValue="A"
    decryptedValue="C"
    onClick={(value) => console.log('onClick', value)}
  >
    <span>Child</span>
  </Letter>
)
