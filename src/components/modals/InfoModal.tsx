import { Cell } from '../cryptogram/Cell'
import { BaseModal } from './BaseModal'

type Props = {
  isOpen: boolean
  handleClose: () => void
}

export const InfoModal = ({ isOpen, handleClose }: Props) => {
  return (
    <BaseModal title="How to play" isOpen={isOpen} handleClose={handleClose}>
      <p className="text-sm text-gray-500 dark:text-gray-300">
        Guess the letter. After each guess, the color of the tile will change to
        show how close your guess was to the word.
      </p>

      <div className="mb-1 mt-4 flex justify-center">
        <Cell
          isRevealing={true}
          isCompleted={true}
          encryptedValue="E"
          decryptedValue="W"
          status="correct"
        />
        <Cell encryptedValue="E" decryptedValue="E" isCompleted={true} />
        <Cell encryptedValue="E" decryptedValue="A" isCompleted={true} />
        <Cell encryptedValue="E" decryptedValue="R" isCompleted={true} />
        <Cell encryptedValue="E" decryptedValue="Y" isCompleted={true} />
      </div>
      <p className="text-sm text-gray-500 dark:text-gray-300">
        The letter W is in the word and in the correct spot.
      </p>

      <div className="mb-1 mt-4 flex justify-center">
        <Cell encryptedValue="E" decryptedValue="P" isCompleted={true} />
        <Cell encryptedValue="E" decryptedValue="I" isCompleted={true} />
        <Cell
          isRevealing={true}
          isCompleted={true}
          encryptedValue="E"
          decryptedValue="L"
          status="present"
        />
        <Cell encryptedValue="E" decryptedValue="O" isCompleted={true} />
        <Cell encryptedValue="E" decryptedValue="T" isCompleted={true} />
      </div>
      <p className="text-sm text-gray-500 dark:text-gray-300">
        The letter L is in the word but in the wrong spot.
      </p>

      <div className="mb-1 mt-4 flex justify-center">
        <Cell encryptedValue="E" decryptedValue="V" isCompleted={true} />
        <Cell encryptedValue="E" decryptedValue="A" isCompleted={true} />
        <Cell encryptedValue="E" decryptedValue="G" isCompleted={true} />
        <Cell
          isRevealing={true}
          isCompleted={true}
          encryptedValue="E"
          decryptedValue="U"
          status="absent"
        />
        <Cell encryptedValue="E" decryptedValue="E" isCompleted={true} />
      </div>
      <p className="text-sm text-gray-500 dark:text-gray-300">
        The letter U is not in the word in any spot.
      </p>

      <p className="mt-6 text-sm italic text-gray-500 dark:text-gray-300">
        This is an open source version of the word guessing game we all know and
        love -{' '}
        <a
          href="https://github.com/cwackerfuss/react-wordle"
          className="font-bold underline"
        >
          check out the code here
        </a>{' '}
      </p>
    </BaseModal>
  )
}
