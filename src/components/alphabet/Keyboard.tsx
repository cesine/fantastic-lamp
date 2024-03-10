import { Cipher } from '../../lib/cipher'
import { DragAndDropLetter } from './DragAndDropLetter'

type Props = {
  cipher: Cipher
  onChar: (input: string, ariaLabel: string) => void
  onDelete: () => void
  onEnter: () => void
  isRevealing?: boolean
}

export const Keyboard = ({
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

  return (
    <div>
      <div className="fixed left-0 top-0 flex flex-col flex-wrap">
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
          <DragAndDropLetter
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
