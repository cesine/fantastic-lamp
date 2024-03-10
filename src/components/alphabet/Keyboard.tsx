import { Cipher, getRemainingLetters } from '../../lib/cipher'
import { DragAndDropLetter } from './DragAndDropLetter'

type Props = {
  cipher: Cipher
  isRevealing?: boolean
}

export const Keyboard = ({ cipher, isRevealing }: Props) => {
  const remainingLetters = getRemainingLetters(cipher)

  return (
    <div className="flex w-1/5 flex-col">
      {remainingLetters.map((key) => (
        <DragAndDropLetter
          alphabetLine={key}
          key={key}
          isRevealing={isRevealing}
        />
      ))}
    </div>
  )
}
