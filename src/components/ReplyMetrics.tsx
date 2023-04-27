import React, { useState } from 'react';
import { Well, Paragraph, Title } from '@zendeskgarden/react-notifications'
import Dropd from './AddTargetDropdown';
import '../Main.css'
const Reply = () => {
  return (
    <Well className="step-3-well">
      <Title>
        Reply metrics
      </Title >
      Set how quickly you respond to a customer's request
        <Dropd />
    </Well>
  )
}

export default Reply;