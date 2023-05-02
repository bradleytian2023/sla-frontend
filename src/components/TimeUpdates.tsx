import React, { useState } from 'react';

import { Field, Label, Input } from '@zendeskgarden/react-forms';
import { Row, Col } from '@zendeskgarden/react-grid';
// import { Well, Paragraph, Title } from '@zendeskgarden/react-notifications'
import HoursDropdown from './MenuDropdown';

const TimeUpdate = () => {
    return (
        <Row justifyContent="start" style={{width: '75%'}}>
            <Col>
                <Field >
                    <Label isRegular>Hours</Label>
                    <Input />
                </Field>
            </Col>
            <Col>
                <Field >
                    <Label isRegular>Minutes</Label>
                    <Input />
                </Field>
            </Col>
            <Col>
                <Field >
                    <Label isRegular>Seconds</Label>
                    <Input />
                </Field>
            </Col>
            <Col>
                <HoursDropdown />
            </Col>
        </Row>
    )
};
export default TimeUpdate;