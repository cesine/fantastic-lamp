import { Cipher, getRemainingLetters } from '../../lib/cipher'
import { DragAndDropLetter } from './DragAndDropLetter'

type Props = {
  cipher: Cipher
  isRevealing?: boolean
}

export const Keyboard = ({ cipher, isRevealing }: Props) => {
  const remainingLetters = getRemainingLetters(cipher)

  return (
    <div className="fixed bottom-6 right-0 top-12 flex flex-col flex-wrap">
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
