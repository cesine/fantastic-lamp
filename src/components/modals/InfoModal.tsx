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
        Decode the hidden quote by guessing the letters, with each tile
        representing a different substitution. In hard mode, tiles won't change
        color. Make up to 10 wrong guesses before losing.
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
        The letter 'P' is indicated by a green tile when it's in the correct
        spot.
      </p>

      <p className="text-sm text-gray-500 dark:text-gray-300">
        The letter 'L' is represented by a yellow tile to indicate it's in the
        message but placed incorrectly.{' '}
      </p>

      <p className="text-sm text-gray-500 dark:text-gray-300">
        The letter 'U' remains uncolored, indicating it's not present in the
        message.
      </p>
    </BaseModal>
  )
}
