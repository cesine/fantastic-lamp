import classnames from 'classnames'

import { Cipher } from '../../lib/cipher'
import { Letter } from './Letter'

const isAndroid = /Android/i.test(navigator.userAgent)

type Props = {
  cipher: Cipher
  onChar: (input: string, ariaLabel: string) => void
  onDelete: () => void
  onEnter: () => void
  isRevealing?: boolean
}

export const Alphabet = ({
  cipher,
  onChar,
  onDelete,
  onEnter,
  isRevealing,
}: Props) => {
  const onClick = (input: string, ariaLabel: string) => {
    if (input === 'ENTER') {
      onEnter()
    } else if (input === 'DELETE') {
      onDelete()
    } else {
      onChar(input, ariaLabel)
    }
  }

  const cryptogramClassnames = classnames('flex flex-wrap justify-center', {
    'ml-1 pr-14': isAndroid,
  })

  return (
    <div>
      <div className={cryptogramClassnames}>
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
        ].map((key) => (
          <Letter
            alphabetLine={key}
            randomKey={cipher[key].guesses[0]}
            key={key}
            onClick={onClick}
            // status={charStatuses[key]}
            isRevealing={isRevealing}
          />
        ))}
      </div>
    </div>
  )
}
