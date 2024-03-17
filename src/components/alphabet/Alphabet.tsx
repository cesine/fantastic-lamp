import { ALPHABET, Cipher } from '../../lib/cipher'
import { Letter } from './Letter'

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
  let mapping: { [key: string]: string } = {}
  Object.keys(cipher).forEach((key) => {
    mapping[cipher[key].guesses[0] || cipher[key].decrypted] = key
  })
  console.log('made the mapping', mapping)
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
      <div className="mb-1 flex flex-wrap justify-center">
        {ALPHABET.map((key) => {
          const encryptedKey = mapping[key] || ''
          const letter = cipher[encryptedKey]
          return (
            <Letter
              alphabetLine={key}
              randomKey={
                letter?.guesses[0] === letter?.decrypted ? encryptedKey : ''
              }
              key={key}
              onClick={onClick}
              // status={charStatuses[key]}
              isRevealing={isRevealing}
            />
          )
        })}
      </div>
    </div>
  )
}
