import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import '../Main.css';
import { ThemeProvider, DEFAULT_THEME } from '@zendeskgarden/react-theming'
import styled from "styled-components";
import { Anchor, Button } from '@zendeskgarden/react-buttons';
import { Breadcrumb } from '@zendeskgarden/react-breadcrumbs';
import { Blockquote, Ellipsis, LG, MD, SM, XL, XXL, XXXL, Span } from '@zendeskgarden/react-typography';
import { Stepper } from '@zendeskgarden/react-accordions';
import { Input, Field, Label } from '@zendeskgarden/react-forms'
import { Col, Grid, Row } from '@zendeskgarden/react-grid'
import SLATargetCapsule from '../components/SLATargetCapsule';
import TimedAction from "../components/TimedActions";


function AddPolicy() {

    const navigate = useNavigate();
    const [index, setIndex] = useState(0);
    const [render, setRender] = useState();

    useEffect(() => { }, [render]);

    interface bInfo {
        name: String,
        description: String,
    }

    const [basicInfo, setBasicInfo] = useState<bInfo>();

    interface condition {
        category: String,
        operator: String,
        value: String,
    }

    interface scope {
        cond_all: condition[],
        cond_any: condition[],
    }

    const [defineScope, setDefineScope] = useState<scope>();

    type targetTime = {
        urgency: number,
        hour: number,
        minute: number,
        second: number,
        // Hour of operation indicator
        operation: number,
    }

    type replyMetrics = {
        first_reply: targetTime[],
        next_reply: targetTime[],
        custom_targets: Boolean[],
    }

    type updateMetrics = {

    }

    type resolutionMetrics = {
        requester_wait_time: targetTime[],
        agent_work_time: targetTime[],
        total_resolution_time: targetTime[],
        resolution_deadline: targetTime[],
    }

    const [SLATargets, setSLATargets] = useState<[replyMetrics, updateMetrics, resolutionMetrics] | undefined>();
    const [ownershipTime, setOwnershipTime] = useState<resolutionMetrics>();

    interface AddProcessProps {
        index: number,
    }

    function back() {
        setIndex(0);
        navigate('/');
    }

    function AddProcess(props: AddProcessProps) {

        return (
            <div className="step-3-flex">
                <Stepper activeIndex={props.index}>
                    <Stepper.Step key="step-1">
                        <Stepper.Label>The basics</Stepper.Label>
                        <Stepper.Content>
                            <Field style={{ width: '30%', marginBottom: '10px' }}>
                                <Label>Policy name* (required)</Label>
                                <Input />
                            </Field>
                            <Field style={{ width: '45%' }}>
                                <Label>Description</Label>
                                <Input />
                            </Field>
                        </Stepper.Content>
                    </Stepper.Step>
                    <Stepper.Step key="step-2">
                        <Stepper.Label>Define scope</Stepper.Label>
                        <Stepper.Content>
                            <LG style={{ marginBottom: '10px' }}>Conditions</LG>
                            <MD>Choose which tickets are affected by this policy</MD>
                            <Anchor href='#'>Learn about conditions and nested conditions</Anchor>
                            <MD className='condition'>Meet ALL of the following conditions</MD>
                            <Button className='condButton'>Add condition</Button>
                            <MD className='condition'>Meet ANY of the following conditions</MD>
                            <Button className='condButton'>Add condition</Button>
                        </Stepper.Content>
                    </Stepper.Step>
                    <Stepper.Step key="step-3">
                        <Stepper.Label>Track metrics by assigning targets</Stepper.Label>
                        <Stepper.Content>
                            {index === 2 ?
                                <div style={{ minHeight: 'min-content', display: 'flex' }}>
                                    <SLATargetCapsule SLATargets={SLATargets} SLAsetter={setSLATargets} renderCheck={render} SLArender={setRender} />
                                </div>
                                : <></>
                            }
                        </Stepper.Content>
                    </Stepper.Step>
                    <Stepper.Step key="step-4">
                        <Stepper.Label>Set timed actions (optional)</Stepper.Label>
                        <Stepper.Content>
                            <TimedAction />
                        </Stepper.Content>
                    </Stepper.Step>
                </Stepper>
            </div>
        );
    };

    return (
        <ThemeProvider theme={DEFAULT_THEME}>
            <div className="page">
                <Breadcrumb>
                    <Anchor href="#">Objects & rules</Anchor>
                    <Anchor onClick={() => navigate('/')}>Service level agreements</Anchor>
                    <Span>Add SLA policy</Span>
                </Breadcrumb>
                <div className="description">
                    <XL className="title">Service level agreements</XL>
                    <SM>A Service Level Agreement (SLA) is a contract between you and your customers that specifies performance measures for support by ticket priority. For example, we respond to urgent tickets in ten minutes and resolve them within two hours. A Group SLA is an agreement you have with internal teams. Your policies are applied to tickets in the order they appear on this page, so drag to reorder as needed. <Anchor isExternal href="https://garden.zendesk.com/">Learn about SLAs and Group SLAs</Anchor></SM>
                </div>
                <AddProcess index={index}></AddProcess>
                <Grid className={index !== 3 ? "footer" : "final-footer"}>
                    <Row>
                        <Col size={10} style={{ padding: 0 }}>
                            <Button className={index !== 3 ? 'processButton' : 'finalButton'} isBasic onClick={back}>Cancel</Button>
                        </Col>
                        <Col size={1}>
                            {index > 0 ? <Button className={index !== 3 ? 'processButton' : 'finalButton'} isBasic onClick={() => setIndex(index - 1)}>Back</Button> : <></>}
                        </Col>
                        <Col size={1} style={{ padding: 0 }}>
                            {index < 3 ? <Button className={index !== 3 ? 'processButton' : 'finalButton'} isPrimary onClick={() => setIndex(index + 1)}>Next</Button> : <></>}
                        </Col>
                    </Row>
                </Grid>
            </div>
        </ThemeProvider>
    )
}

export default AddPolicy;