import { Cipher, getRemainingLetters } from '../../lib/cipher'
import { DragAndDropLetter } from './DragAndDropLetter'

type Props = {
  cipher: Cipher
  isRevealing?: boolean
}

export const Keyboard = ({ cipher, isRevealing }: Props) => {
  const remainingLetters = getRemainingLetters(cipher)

  return (
    <div>
      <div className="fixed left-0 top-12 flex h-screen flex-col flex-wrap">
        {remainingLetters.map((key) => (
          <DragAndDropLetter
            alphabetLine={key}
            key={key}
            isRevealing={isRevealing}
          />
        ))}
      </div>
    </div>
  )
}
