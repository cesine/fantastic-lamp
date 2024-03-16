import {
  BugAntIcon,
  CalendarIcon,
  ChartBarIcon,
  ChatBubbleOvalLeftIcon,
  CogIcon,
  HeartIcon,
  InformationCircleIcon,
  PuzzlePieceIcon,
} from '@heroicons/react/24/outline'

import { ENABLE_ARCHIVED_GAMES } from '../../constants/settings'
import { GAME_TITLE } from '../../constants/strings'

const isMobile = /iPhone|iPad|iPod|Android/i.test(navigator.userAgent)

type Props = {
  betaMode?: boolean
  setHint: (value: boolean) => void
  setIsHeartModalOpen: (value: boolean) => void
  setIsInfoModalOpen: (value: boolean) => void
  setIsSendMessageModalOpen: (value: boolean) => void
  setIsStatsModalOpen: (value: boolean) => void
  setIsDatePickerModalOpen: (value: boolean) => void
  setIsSettingsModalOpen: (value: boolean) => void
}

export const Navbar = ({
  betaMode = false,
  setHint,
  setIsHeartModalOpen,
  setIsInfoModalOpen,
  setIsSendMessageModalOpen,
  setIsStatsModalOpen,
  setIsDatePickerModalOpen,
  setIsSettingsModalOpen,
}: Props) => {
  return (
    <div className="navbar">
      <div className="navbar-content px-5 short:h-auto">
        <div className="flex">
          <InformationCircleIcon
            aria-label="Open Info Modal"
            className={`ml-3 h-6 w-6 dark:stroke-white ${
              betaMode ? 'cursor-pointer' : 'cursor-not-allowed opacity-50'
            }`}
            onClick={() => {
              window.gtag('event', 'unlock_achievement', {
                achievement_id: 'open_info_modal',
              })
              setIsInfoModalOpen(true)
            }}
            title="Show how to play"
          />
          {ENABLE_ARCHIVED_GAMES && (
            <CalendarIcon
              aria-label="Open Archived Games"
              className={`ml-3 h-6 w-6 dark:stroke-white ${
                betaMode ? 'cursor-pointer' : 'cursor-not-allowed opacity-50'
              }`}
              onClick={() => {
                window.gtag('event', 'unlock_achievement', {
                  achievement_id: 'open_archived_games',
                })
                setIsDatePickerModalOpen(true)
              }}
            />
          )}
          {!isMobile ? (
            <HeartIcon
              aria-label="Open Heart Modal"
              className={`ml-3 h-6 w-6 dark:stroke-white ${
                betaMode ? 'cursor-pointer' : 'cursor-not-allowed opacity-50'
              }`}
              onClick={() => {
                window.gtag('event', 'unlock_achievement', {
                  achievement_id: 'open_heart_modal',
                })
                setIsHeartModalOpen(true)
              }}
              title="Learn more how to give love to this game"
            />
          ) : null}
        </div>
        <h1
          aria-label={GAME_TITLE}
          className="block truncate text-xl font-bold dark:text-white md:hidden"
        >
          Cryptogram
        </h1>
        <h1
          aria-label={GAME_TITLE}
          className="hidden truncate text-xl font-bold dark:text-white md:block"
        >
          {GAME_TITLE}
        </h1>

        <div className="right-icons">
          <a
            href="https://forms.gle/zRP8pAE1JrTEA5bWA"
            target="blank"
            rel="noopener noreferrer"
          >
            <BugAntIcon
              aria-label="Send a bug report"
              className="mr-3 h-6 w-6 cursor-pointer dark:stroke-white"
              onClick={() => {
                window.gtag('event', 'unlock_achievement', {
                  achievement_id: 'click_send_a_bug_report',
                })
              }}
              title="Click to send me a bug report"
            />
          </a>
          <ChatBubbleOvalLeftIcon
            aria-label="Send an encrypted message"
            className={`ml-3 h-6 w-6 dark:stroke-white ${
              betaMode ? 'cursor-pointer' : 'cursor-not-allowed opacity-50'
            }`}
            onClick={() => {
              window.gtag('event', 'unlock_achievement', {
                achievement_id: 'click_send_a_message',
              })
              setIsSendMessageModalOpen(true)
            }}
            title="Click to write an encrypted message"
          />

          <PuzzlePieceIcon
            aria-label="Show Hint"
            className={`ml-3 h-6 w-6 dark:stroke-white ${
              betaMode ? 'cursor-pointer' : 'cursor-not-allowed opacity-50'
            }`}
            onClick={() => {
              window.gtag('event', 'unlock_achievement', {
                achievement_id: 'click_show_hint',
              })
              setHint(true)
            }}
            title="Click to insert the hint"
          />

          <ChartBarIcon
            aria-label="Open Stats"
            className={`ml-3 h-6 w-6 dark:stroke-white ${
              betaMode ? 'cursor-pointer' : 'cursor-not-allowed opacity-50'
            }`}
            onClick={() => {
              window.gtag('event', 'unlock_achievement', {
                achievement_id: 'open_stats',
              })
              setIsStatsModalOpen(true)
            }}
            title="Show stats"
          />
          <CogIcon
            aria-label="Open Settings"
            className={`ml-3 h-6 w-6 dark:stroke-white ${
              betaMode ? 'cursor-pointer' : 'cursor-not-allowed opacity-50'
            }`}
            onClick={() => {
              window.gtag('event', 'unlock_achievement', {
                achievement_id: 'open_settings',
              })
              setIsSettingsModalOpen(true)
            }}
            title="Open Settings"
          />
        </div>
      </div>
      <hr></hr>
    </div>
  )
}
