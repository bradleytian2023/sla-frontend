import React, { useState } from 'react';

import { Field, Label, Input } from '@zendeskgarden/react-forms';
import { Row, Col } from '@zendeskgarden/react-grid';
// import { Well, Paragraph, Title } from '@zendeskgarden/react-notifications'
import HoursDropdown from './MenuDropdown';

const TimeUpdate = () => {
    return (
        <Row justifyContent="start">
            <Col>
                <Field style={{ width: '60%' }}>
                    <Label>Hours</Label>
                    <Input />
                </Field>
            </Col>
            <Col>
                <Field style={{ width: '60%', right: '48%' }}>
                    <Label>Minutes</Label>
                    <Input />
                </Field>
            </Col>
            <Col>
                <Field style={{ width: '60%', right: '96%' }}>
                    <Label>Seconds</Label>
                    <Input />
                </Field>
            </Col>
            <Col>
                <div style={{ position: 'absolute', width: '80%', right: '-0.5%' }}>
                    <HoursDropdown />
                </div>
            </Col>
        </Row>
    )
};
export default TimeUpdate;