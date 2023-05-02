import React, { useState } from 'react';
import { Well, Paragraph, Title } from '@zendeskgarden/react-notifications'
import Dropd from './AddTargetDropdown';
import '../Main.css'
import FirstReplyTime from './FirstReplyTime';
import NextReplyTime from './NextReplyTime';

const Reply = () => {
  const [selected, setSelected] = useState();
  return (
    <>
      <Well className="step-3-well">
        <Title>
          Reply metrics
        </Title >
        Set how quickly you respond to a customer's request
        <Dropd setter={setSelected} />
      </Well>
      {selected == "first" ?
        <FirstReplyTime />
        : selected == "next" ?
          <NextReplyTime />
          : <></>
      }
    </>
  )
}

export default Reply;