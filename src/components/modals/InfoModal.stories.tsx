import React from 'react'

import { InfoModal } from './InfoModal'

export default {
  title: 'InfoModal',
  component: InfoModal,
}

export const Default = () => (
  <InfoModal isOpen={true} handleClose={() => console.log('handleClose')} />
)
