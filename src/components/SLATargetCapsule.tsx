import React from 'react';
import '../Main.css';
import { useState, useEffect } from 'react';
import { ThemeProvider, DEFAULT_THEME } from '@zendeskgarden/react-theming';
import ResolutionMetrics from './ResolutionMetrics'
import ReplyMetricsInteractive from './ReplyMetrics';
import ReplyMetricsSemantic from './ReplyMetrics-T';
import UpdateMetrics from './UpdateMetrics';
import { SM, MD, LG, XL, XXL, XXXL } from '@zendeskgarden/react-typography';
import { Anchor } from '@zendeskgarden/react-buttons';
import { Grid, Row, Col } from '@zendeskgarden/react-grid';


function SLATargetCapsule(props: any) {

    const [thirdActivate, setThirdActivate] = useState(true);
    useEffect(() => { }, [props.renderCheck]);

    return (
        <>
            <ThemeProvider>

                <div className='title'>
                    <LG>SLA targets</LG>
                </div>
                <div className='text' id='step-3-desc'>
                    <MD style={{ color: '#68737D' }}>Choose a time target for each metric by every ticket priority level. Choose whether time is measured in “calendar hours” or “business hours.”</MD>
                </div>
                <div className='text'>
                    <Anchor isExternal href="https://garden.zendesk.com/" target="_blank">
                        Learn about metrics
                    </Anchor>
                </div>
                <div style={{ marginBottom: '25px' }}>
                    {thirdActivate ? <ReplyMetricsInteractive /> : <ReplyMetricsSemantic />}
                </div>
                <div style={{ marginBottom: '25px' }}>
                    <UpdateMetrics />
                </div>
                <div style={{ marginBottom: '25px' }}>
                    <ResolutionMetrics activate={setThirdActivate} render={props.SLArender} />
                </div>
                
            </ThemeProvider>
        </>
    );
}

export default SLATargetCapsule;