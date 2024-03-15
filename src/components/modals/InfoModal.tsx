import { Cell } from '../cryptogram/Cell'
import { BaseModal } from './BaseModal'

type Props = {
  isOpen: boolean
  handleClose: () => void
}

const onClick = (input: string, ariaLabel: string) => {
  alert(`You clicked on ${ariaLabel}`)
}
let firstTutorial = true

export const InfoModal = ({ isOpen, handleClose }: Props) => {
  if (isOpen && firstTutorial) {
    firstTutorial = false
    window.gtag('event', 'tutorial_begin')
  }

  function onCloseClick() {
    window.gtag('event', 'tutorial_complete')
    return handleClose()
  }

  return (
    <BaseModal title="How to play" isOpen={isOpen} handleClose={onCloseClick}>
      <p className="text-sm text-gray-500 dark:text-gray-300">
        Uncover the hidden quote by deciphering the code. Each letter is
        substituted with another. Guess the letter. After each guess, the color
        of the tile will change to show how close your guess was to the message.
      </p>

      <div className="mb-1 mt-4 flex justify-center">
        <Cell
          onClick={onClick}
          encryptedValue="K"
          decryptedValue="P"
          isCompleted={true}
          status="correct"
        />
        <Cell
          onClick={onClick}
          encryptedValue="F"
          decryptedValue=""
          isCompleted={true}
        />
        <Cell
          onClick={onClick}
          isRevealing={true}
          isCompleted={true}
          encryptedValue="D"
          decryptedValue=""
        />
        <Cell
          onClick={onClick}
          encryptedValue="Z"
          decryptedValue="U"
          isCompleted={true}
          status="absent"
        />
        <Cell
          onClick={onClick}
          encryptedValue="C"
          decryptedValue="L"
          status="present"
          isCompleted={true}
        />
      </div>

      <p className="text-sm text-gray-500 dark:text-gray-300">
        The letter P is in correct spot.
      </p>

      <p className="text-sm text-gray-500 dark:text-gray-300">
        The letter L is in the message but in the wrong spot.
      </p>

      <p className="text-sm text-gray-500 dark:text-gray-300">
        The letter U is not in the message in any spot.
      </p>
    </BaseModal>
  )
}
