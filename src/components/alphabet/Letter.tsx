import classnames from 'classnames'
import { ReactNode } from 'react'

import { REVEAL_TIME_MS } from '../../constants/settings'
import { getStoredIsHighContrastMode } from '../../lib/localStorage'
import { CharStatus } from '../../lib/statuses'

const isPunctuation = (randomKey: string) => {
  return /\W/.test(randomKey)
}

let userHasInteractedWithLetter = false
let userHasDroppedALetter = false

type Props = {
  children?: ReactNode
  alphabetLine: string
  randomKey: string
  width?: number
  status?: CharStatus
  onClick: (input: string, ariaLabel: string) => void
  isRevealing?: boolean
}

export const Letter = ({
  children,
  status,
  width = 40,
  alphabetLine,
  randomKey,
  onClick,
  isRevealing,
}: Props) => {
  const keyDelayMs = REVEAL_TIME_MS
  const isHighContrast = getStoredIsHighContrastMode()
  const displayButton = !isPunctuation(randomKey)

  const classes = classnames(
    'xxshort:h-4 xxshort:w-4 xxshort:text-xxs xshort:w-6 xshort:h-6 flex short:h-6 w-8 h-8 items-center justify-center rounded mx-0.5 text-xs font-thin cursor-pointer select-none dark:text-white',
    {
      'transition ease-in-out': isRevealing,
      'bg-slate-200 dark:bg-slate-600 hover:bg-slate-300 active:bg-slate-400':
        !status,
      'bg-slate-400 dark:bg-slate-800 text-white': status === 'absent',
      'bg-orange-500 hover:bg-orange-600 active:bg-orange-700 text-white':
        status === 'correct' && isHighContrast,
      'bg-cyan-500 hover:bg-cyan-600 active:bg-cyan-700 text-white':
        status === 'present' && isHighContrast,
      'bg-green-500 hover:bg-green-600 active:bg-green-700 text-white':
        status === 'correct' && !isHighContrast,
      'bg-yellow-500 hover:bg-yellow-600 active:bg-yellow-700 text-white':
        status === 'present' && !isHighContrast,
    }
  )

  const classesLetter = classnames(
    'xxshort:h-4 xxshort:w-4 xxshort:text-xxs xshort:w-6 xshort:h-6 flex short:h-6 w-8 h-8 items-center justify-center rounded mx-0.5 text-xs font-thin cursor-pointer select-none dark:text-white',
    {
      'transition ease-in-out': isRevealing,
    }
  )

  const styles = {
    transitionDelay: isRevealing ? `${keyDelayMs}ms` : 'unset',
    width: `${width}px`,
  }

  const stylesLetter = {
    transitionDelay: isRevealing ? `${keyDelayMs}ms` : 'unset',
    width: `${width}px`,
  }

  const handleClick: React.MouseEventHandler<HTMLButtonElement> = (event) => {
    if (!userHasInteractedWithLetter) {
      userHasInteractedWithLetter = true
      window.gtag('event', 'unlock_achievement', {
        achievement_id: 'click_alphabet_letter',
      })
    }
    const label = (event?.target as HTMLButtonElement)?.ariaLabel || ''

    onClick(randomKey, label)
    event.currentTarget.blur()
  }

  const allowDrop: React.DragEventHandler<HTMLButtonElement> = (event) => {
    event.preventDefault()
  }

  const onDrop: React.DragEventHandler<HTMLButtonElement> = (event) => {
    event.preventDefault()
    var input = event.dataTransfer.getData('text')
    onClick(input, alphabetLine)
    if (!userHasDroppedALetter) {
      userHasDroppedALetter = true
      window.gtag('event', 'unlock_achievement', {
        achievement_id: 'drop_on_alphabet_letter',
      })
    }
  }

  return (
    <div>
      <button
        style={displayButton ? styles : stylesLetter}
        aria-label={alphabetLine}
        className={displayButton ? classes : classesLetter}
        onClick={handleClick}
        onDragOver={allowDrop}
        onDrop={onDrop}
      >
        {children || randomKey}
      </button>

      <span
        aria-label={alphabetLine}
        style={stylesLetter}
        className={classesLetter}
      >
        {alphabetLine}
      </span>
    </div>
  )
}
