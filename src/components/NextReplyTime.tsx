import React from 'react';
import { Field, Label, Input } from '@zendeskgarden/react-forms';
import { Row, Col } from '@zendeskgarden/react-grid';
import { Well, Paragraph, Title } from '@zendeskgarden/react-notifications';
import SetTargetTime from './SetTargetTime';

const NextReplyTime = () => (
    <>
        <Well style= {{ textAlign: 'left' }}>
            <Title> Next reply time</Title>
            <Paragraph>
                The time between the oldest, unanswered customer comment and the next public comment from an agent, displayed in minutes.
            </Paragraph>
            <SetTargetTime />
        </Well>
    </>
);

export default NextReplyTime;