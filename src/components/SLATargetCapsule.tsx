import React from 'react';
import '../Main.css';
import { ThemeProvider, DEFAULT_THEME } from '@zendeskgarden/react-theming';
import ResolutionMetrics from './ResolutionMetrics'
import ReplyMetrics from './ReplyMetrics';
import UpdateMetrics from './UpdateMetrics';
import { SM, MD, LG, XL, XXL, XXXL } from '@zendeskgarden/react-typography';
import { Anchor } from '@zendeskgarden/react-buttons';
import { Grid, Row, Col } from '@zendeskgarden/react-grid';


function SLATargetCapsule(props: any) {
    return (
        <>
            <div>
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
                    <Grid style={{padding: 0}}>
                        <Row style={{ marginBottom: '2rem' }}>
                            <Col>
                                <ReplyMetrics />
                            </Col>
                        </Row>
                        <Row style={{ marginBottom: '2rem' }}>
                            <Col>
                                <UpdateMetrics />
                            </Col>

                        </Row>
                        <Row style={{ marginBottom: '2rem' }}>
                            <Col>
                                <ResolutionMetrics />
                            </Col>
                        </Row>
                    </Grid>

                </ThemeProvider>
            </div>
        </>
    );
}

export default SLATargetCapsule;