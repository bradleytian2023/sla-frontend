import React, { useState } from 'react';
import { Dropdown, Menu, Item, Trigger, NextItem } from '@zendeskgarden/react-dropdowns';
import { Button } from '@zendeskgarden/react-buttons';
import { Row, Col } from '@zendeskgarden/react-grid';
import { ReactComponent as ChevronIcon } from '@zendeskgarden/svg-icons/src/16/chevron-down-stroke.svg';
// import FirstReplyTime from './FirstReplyTime';
// import NextReplyTime from './NextReplyTime';

function Dropd(props: any) {
    const [rotated, setRotated] = useState<boolean | undefined>();
    const [index, setIndex] = useState(0)
    const [selected, setSelected] = useState("");

    return (
        <>
            <Row>
                <Col textAlign="center">
                    <Dropdown
                        onSelect={item => { setSelected(item) }}
                    >
                        <Trigger>
                            <div className='buttonRight'>
                                <Button>
                                    Add target
                                    <Button.EndIcon isRotated={rotated}>
                                        <ChevronIcon />
                                    </Button.EndIcon>
                                </Button>
                            </div>

                        </Trigger>
                        <Menu>
                            <Item value="first">First reply time</Item>
                            <Item value="next">Next reply time</Item>
                        </Menu>
                    </Dropdown>
                    {/* {selected == "first" ? 
                    <div style={{ position: 'absolute', left: '-46%', top: '223%', width: '112%' }}>
                        <FirstReplyTime />
                    </div> 
                    : selected == "next" ? 
                    <div style={{ position: 'absolute', left: '-46%', top: '223%', width: '112%' }}>
                        <NextReplyTime /> 
                    </div> 
                    : <></>
                    } */}
                </Col>
            </Row>
        </>
    );
}

export default Dropd;
