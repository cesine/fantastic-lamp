import classnames from 'classnames'

import { REVEAL_TIME_MS } from '../../constants/settings'
import { CharStatus } from '../../lib/statuses'

let userHasInteractedWithLetter = false

type Props = {
  letter: string
  onClick: (input: string, ariaLabel: string) => void
  status?: CharStatus
  isRevealing?: boolean
}

export const SelectLetter = ({
  status,
  letter,
  isRevealing,
  onClick,
}: Props) => {
  const keyDelayMs = REVEAL_TIME_MS

  const classesLetter = classnames(
    'xxshort:h-6 xxshort:w-6 xxshort:text-xxs xshort:w-6 xshort:h-6 flex short:h-8 short:w-8 h-10 w-10 items-center justify-center rounded-full m-0.5 text-xl font-thin cursor-pointer select-none dark:text-white',
    {
      'bg-slate-200 dark:bg-slate-600 hover:bg-slate-300 active:bg-slate-400 border-2 border-slate-600 dark:border-white':
        !status,
      'transition ease-in-out': isRevealing,
    }
  )

  const stylesLetter = {
    transitionDelay: isRevealing ? `${keyDelayMs}ms` : 'unset',
  }

  const handleOnClick = () => {
    onClick(letter, '')
  }

  return (
    <button
      aria-label={letter}
      onClick={handleOnClick}
      style={stylesLetter}
      className={classesLetter}
      title="Click to select me"
    >
      {letter}
    </button>
  )
}
