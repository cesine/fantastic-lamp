import { useEffect } from 'react'

import { DELETE_TEXT, ENTER_TEXT } from '../../constants/strings'
import { Cypher } from '../../lib/cipher'
import { getStatuses } from '../../lib/statuses'
import { localeAwareUpperCase } from '../../lib/words'
import { Letter } from './Letter'

type Props = {
  cipher: Cypher
  onChar: (value: string) => void
  onDelete: () => void
  onEnter: () => void
  solution: string
  guesses: string[]
  isRevealing?: boolean
}

export const Alphabet = ({
  cipher,
  onChar,
  onDelete,
  onEnter,
  solution,
  guesses,
  isRevealing,
}: Props) => {
  const charStatuses = getStatuses(solution, guesses)

  return (
    <div>
      <div className="mb-1 flex justify-center">
        {[
          'A',
          'B',
          'C',
          'D',
          'E',
          'F',
          'G',
          'H',
          'I',
          'J',
          'K',
          'L',
          'M',
          'N',
          'O',
          'P',
          'Q',
          'R',
          'S',
          'T',
          'U',
          'V',
          'W',
          'X',
          'Y',
          'Z',
        ].map((key) => {
          const toad =
            Object.keys(cipher).find(
              (item) => cipher[item].encrypted === key
            ) || ''
          console.log('toad', toad)
          const frog = cipher[toad]
          console.log('frog', frog)

          return (
            <Letter
              aria-label={frog.encrypted}
              alpha={frog.encrypted}
              randomkey={frog.guesses[0]}
              key={frog.encrypted}
              status={charStatuses[key]}
              isRevealing={isRevealing}
            />
          )
        })}
      </div>
    </div>
  )
}
