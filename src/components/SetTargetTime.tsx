import React from 'react';
import { Well, Paragraph, Title } from '@zendeskgarden/react-notifications'
import TimeUpdate from './TimeUpdates';
import { ThemeProvider, DEFAULT_THEME } from '@zendeskgarden/react-theming';
import { start } from 'repl';

const SetTargetTime = () => (
    <>
        <ThemeProvider theme={DEFAULT_THEME} >
            <Title style={{ marginTop: '20px' }}>Set target time</Title >

            <div className='step-1-time'>
                <Title>Urgent tickets</Title>
                <TimeUpdate />
            </div>

            <div className='step-1-time'>
                <Title>High priority tickets</Title>
                <TimeUpdate />
            </div>

            <div className='step-1-time'>
                <Title>Normal priority tickets</Title>
                <TimeUpdate />
            </div>

            <div className='step-1-time'>
                <Title>Low priority tickets</Title>
                <TimeUpdate />
            </div>

        </ThemeProvider>
    </>
);

export default SetTargetTime;
