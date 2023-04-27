import React from 'react';
import { Well, Paragraph, Title } from '@zendeskgarden/react-notifications'
import TimeUpdate from './TimeUpdates';
import { ThemeProvider, DEFAULT_THEME } from '@zendeskgarden/react-theming';
import { start } from 'repl';

const SetTargetTime = () => (
    <>
        <ThemeProvider theme={DEFAULT_THEME} >
            <Title style={{textAlign: 'left', fontWeight: 400}}>

            Set target time
            </Title >
            
            Urgent tickets
            <TimeUpdate />

            High priority tickets
            <TimeUpdate />

            Normal priority tickets
            <TimeUpdate />

            Low priority tickets
            <TimeUpdate />
        </ThemeProvider>
    </>
);

export default SetTargetTime;
