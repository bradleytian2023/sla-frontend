import React, { useState } from 'react';
import { Dropdown, Menu, Item, Trigger, NextItem } from '@zendeskgarden/react-dropdowns';
import { Button } from '@zendeskgarden/react-buttons';
import { Row, Col } from '@zendeskgarden/react-grid';
import { ReactComponent as ChevronIcon } from '@zendeskgarden/svg-icons/src/16/chevron-down-stroke.svg';

function Dropd(props: any) {
    const [rotated, setRotated] = useState<boolean | undefined>();

    return (
        <>
            <Row>
                <Col textAlign="center">
                    <Dropdown
                        onSelect={item => { props.setter(item) }}
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
                </Col>
            </Row>
        </>
    );
}

export default Dropd;
