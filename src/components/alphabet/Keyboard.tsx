import { Cipher, getRemainingLetters } from '../../lib/cipher'
import { DragAndDropLetter } from './DragAndDropLetter'

type Props = {
  cipher: Cipher
  isRevealing?: boolean
}

export const Keyboard = ({ cipher, isRevealing }: Props) => {
  const remainingLetters = getRemainingLetters(cipher)

  return (
    <div className="fixed bottom-0 right-0 flex w-full flex-wrap justify-center bg-white pb-4 pt-2 dark:bg-slate-900">
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
