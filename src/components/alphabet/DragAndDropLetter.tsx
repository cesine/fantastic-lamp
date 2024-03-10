import classnames from 'classnames'

import { REVEAL_TIME_MS } from '../../constants/settings'
import { CharStatus } from '../../lib/statuses'

let userHasInteractedWithLetter = false

type Props = {
  alphabetLine: string | null
  randomKey: string
  width?: number
  status?: CharStatus
  onClick: (input: string, ariaLabel: string) => void
  isRevealing?: boolean
}

export const DragAndDropLetter = ({
  status,
  width = 20,
  alphabetLine = '',
  randomKey,
  onClick,
  isRevealing,
}: Props) => {
  const keyDelayMs = REVEAL_TIME_MS

  const classesLetter = classnames(
    'xxshort:h-4 xxshort:w-4 xxshort:text-xxs xshort:w-6 xshort:h-6 flex short:h-8 short:w-8 h-10 w-10 items-center justify-center rounded-full mx-0.5 text-xs font-bold cursor-pointer select-none dark:text-white',
    {
      'bg-slate-200 dark:bg-slate-600 hover:bg-slate-300 active:bg-slate-400 border-2 border-slate-200 dark:border-white':
        !status,
      'transition ease-in-out': isRevealing,
    }
  )

  const stylesLetter = {
    transitionDelay: isRevealing ? `${keyDelayMs}ms` : 'unset',
  }

  const handleDrop: React.MouseEventHandler<HTMLButtonElement> = (event) => {
    if (!userHasInteractedWithLetter) {
      userHasInteractedWithLetter = true
      window.gtag('event', 'unlock_achievement', {
        achievement_id: 'drag_alphabet_letter',
      })
    }
    const label = (event?.target as HTMLButtonElement)?.ariaLabel || ''

    onClick(randomKey, label)
    event.currentTarget.blur()
  }

  return (
    <div>
      <span
        aria-label={alphabetLine || ''}
        draggable={true}
        style={stylesLetter}
        className={classesLetter}
      >
        {alphabetLine}
      </span>
    </div>
  )
}
