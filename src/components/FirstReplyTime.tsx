import React from 'react';
import { Field, Label, Input } from '@zendeskgarden/react-forms';
import { Row, Col } from '@zendeskgarden/react-grid';
import { Well, Paragraph, Title } from '@zendeskgarden/react-notifications';
import HoursDropdown from './MenuDropdown';
import SetTargetTime from './SetTargetTime';

const FirstReplyTime = () => (
    <>
        <Well style={{ textAlign: 'left' }}>
            <Title> First reply time</Title>
            <Paragraph>
                The time between the first customer comment and the first public comment from an agent, displayed in minutes
            </Paragraph>
            <SetTargetTime />
        </Well>
    </>
);

export default FirstReplyTime;