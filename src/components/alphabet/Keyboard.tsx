import { Cipher, getRemainingLetters } from '../../lib/cipher'
import { SelectLetter } from './SelectLetter'

type Props = {
  cipher: Cipher
  isRevealing?: boolean
  onClick: (input: string, ariaLabel: string) => void
}

export const Keyboard = ({ cipher, isRevealing, onClick }: Props) => {
  const remainingLetters = getRemainingLetters(cipher)

  return (
    <div className="flex flex-row flex-wrap bg-white dark:bg-slate-900">
      {remainingLetters.map((key) => (
        <SelectLetter
          letter={key}
          key={key}
          isRevealing={isRevealing}
          onClick={onClick}
        />
      ))}
    </div>
  )
}
