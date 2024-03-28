import classnames from 'classnames'
import { FocusEventHandler, RefObject, createRef, useState } from 'react'

import { REVEAL_TIME_MS } from '../../constants/settings'
import { newCipher } from '../../lib/cipher'
import { getStoredIsHighContrastMode } from '../../lib/localStorage'
import { CharStatus } from '../../lib/statuses'
import { Keyboard } from '../alphabet/Keyboard'

const isaLetter = (decryptedValue: string) => {
  return /[a-zA-Z]+/.test(decryptedValue)
}
const cipher = newCipher(4)
const isAndroid = /Android/i.test(navigator.userAgent)
const isIphone = /iPhone/i.test(navigator.userAgent)
let userHasInteractedWithCell = false

type Props = {
  encryptedValue: string
  decryptedValue?: string
  status?: CharStatus
  isRevealing?: boolean
  isCompleted?: boolean
  position?: number
  onClick: (input: string, ariaLabel: string) => void
}

export const Cell = ({
  encryptedValue,
  decryptedValue,
  status,
  isRevealing,
  isCompleted,
  onClick,
  position = 0,
}: Props) => {
  // const [revealLetter, setRevealLetter] = useState(isRevealing)
  // const toggleRevealLetter = () => {
  //   setRevealLetter(!revealLetter)
  // }
  const [isKeyboardShowing, setIsKeyboardShowing] = useState(false)

  const isFilled = decryptedValue && !isCompleted
  const shouldReveal = isRevealing && isCompleted
  const animationDelay = `${position * REVEAL_TIME_MS}ms`
  const isHighContrast = getStoredIsHighContrastMode()
  const shouldDisplayDecrypted = isaLetter(encryptedValue)

  const classesEncrypted = classnames(
    'xxshort:w-4 xxshort:h-4 short:text-2xl short:w-6 short:h-6 w-6 h-6 flex items-center justify-center mx-0.5 mb-4 text-4xl font-thin rounded dark:text-white',
    {
      'bg-white dark:bg-slate-900': !status,
    }
  )
  const classesPunctuation = classnames(
    'xxshort:w-4 xxshort:h-4 short:text-2xl short:w-6 short:h-6 w-6 h-6 flex items-center justify-center mx-0.5 text-4xl font-thin rounded dark:text-white',
    {
      'bg-white dark:bg-federal-blue': !status,
    }
  )

  const classesDecrypted = classnames(
    'xxshort:w-4 xxshort:h-4 short:text-2xl short:w-6 short:h-6 w-6 h-6 border-solid border-2 flex items-center justify-center mx-0.5 text-4xl font-thin rounded dark:text-white',
    {
      'hover:bg-slate-500 active:bg-slate-400 dark:border-federal-blue-700':
        !status,
      'absent border-federal-blue-400 hover:bg-slate-500 active:bg-slate-400 dark:border-federal-blue-700':
        status === 'absent',
      'correct shadowed bg-cyan-500 hover:bg-orange-600 active:bg-orange-700 text-white border-cyan-500':
        status === 'correct' && isHighContrast,
      'present shadowed bg-orange-500 hover:bg-cyan-600 active:bg-cyan-700 text-white border-orange-500':
        status === 'present' && isHighContrast,
      'correct shadowed bg-green-700 hover:bg-green-600 active:bg-green-700 text-white border-green-700':
        status === 'correct' && !isHighContrast,
      'present shadowed bg-dark-goldenrod hover:bg-yellow-500 active:bg-yellow-700 text-white border-dark-goldenrod':
        status === 'present' && !isHighContrast,
      'cell-fill-animation': isFilled,
      'cell-reveal': shouldReveal,
    }
  )

  const stylesDecrypted = {
    fontFamily: 'Courier New',
    animationDelay,
    minHeight: '1em',
    minWidth: '1em',
  }

  const stylesEncrypted = {
    ...stylesDecrypted,
  }
  const hiddenInputRef: RefObject<HTMLInputElement> = createRef()

  const cellOnClick: React.MouseEventHandler<HTMLButtonElement> = (event) => {
    if (!userHasInteractedWithCell) {
      userHasInteractedWithCell = true
      window.gtag('event', 'unlock_achievement', {
        achievement_id: 'click_cryptogram_cell',
      })
    }
    const label = (event?.target as HTMLButtonElement)?.ariaLabel || ''
    onClick('', label)

    if (isAndroid) {
      setIsKeyboardShowing(true)
    }
    if (isIphone) {
      event.currentTarget.blur()
      hiddenInputRef?.current?.focus()
    }
  }

  const onChar = (input: string) => {
    onClick(input, encryptedValue)
    if (isAndroid) {
      setIsKeyboardShowing(false)
    }
  }

  const onBlur: FocusEventHandler<HTMLButtonElement> = () => {
    if (!isAndroid) {
      return
    }
    setTimeout(() => {
      setIsKeyboardShowing(false)
    }, REVEAL_TIME_MS / 2)
  }

  const notTabbable = shouldDisplayDecrypted ? {} : { tabIndex: -1 }

  return (
    <div className="relative inline-flex flex-col">
      <button
        aria-label={encryptedValue}
        onBlur={onBlur}
        onClick={cellOnClick}
        className={
          shouldDisplayDecrypted ? classesDecrypted : classesPunctuation
        }
        style={stylesDecrypted}
        {...notTabbable}
      >
        {shouldDisplayDecrypted ? decryptedValue : null}
        <input
          ref={hiddenInputRef}
          style={{ position: 'absolute', top: '-9999px' }}
          tabIndex={-1}
          type="text"
        />
      </button>
      {isKeyboardShowing ? (
        <span
          style={{
            position: 'fixed',
            left: '10px',
            maxWidth: '800px',
            width: '80%',
          }}
          className="z-10 mt-20 dark:bg-slate-900"
        >
          <Keyboard
            cipher={cipher}
            isRevealing={isRevealing}
            onClick={onChar}
          />
        </span>
      ) : null}

      <div
        aria-label={encryptedValue}
        style={stylesEncrypted}
        className={classesEncrypted}
      >
        {encryptedValue}
      </div>
    </div>
  )
}
