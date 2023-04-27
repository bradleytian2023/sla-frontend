
import { Well, Title } from '@zendeskgarden/react-notifications';
import Button from './ButtonGroup';
import React, { ButtonHTMLAttributes } from 'react';
import { Dropdown, Trigger, Menu, Item } from '@zendeskgarden/react-dropdowns';
import { Tooltip } from '@zendeskgarden/react-tooltips';
import {
    Body,
    Cell,
    Head,
    HeaderCell,
    HeaderRow,
    OverflowButton,
    Row,
    Table
} from '@zendeskgarden/react-tables';
import '../Main.css'

function Example() {

    const TooltipOverflowButton = React.forwardRef(
        (props: ButtonHTMLAttributes<HTMLButtonElement>, ref: React.Ref<HTMLButtonElement>) => (
            <Tooltip content={props['aria-label']} placement="start">
                <OverflowButton ref={ref} {...props} />
            </Tooltip>
        )
    );

    const OverflowMenu = () => (
        <Dropdown>
            <Trigger>
                <TooltipOverflowButton aria-label="Row actions" />
            </Trigger>
            <Menu
                placement="bottom-end"
                popperModifiers={{
                    preventOverflow: {
                        boundariesElement: 'viewport'
                    },
                    flip: {
                        enabled: false
                    },
                    offset: {
                        fn: data => {
                            /**
                             * Ensure correct placement relative to trigger
                             **/
                            data.offsets.popper.top -= 2;

                            return data;
                        }
                    }
                }}
            >
                <Item value="item-1">Edit</Item>
                <Item value="item-2">Delete</Item>
            </Menu>
        </Dropdown>
    );

    const Tables = () => (
        <div style={{ overflowX: 'auto' }}>
            <Table style={{ minWidth: 500 }}>
                <Head>
                    <HeaderRow>
                        <HeaderCell>SLA target</HeaderCell>
                        <HeaderCell>Urgent</HeaderCell>
                        <HeaderCell>High</HeaderCell>
                        <HeaderCell>Normal</HeaderCell>
                        <HeaderCell>Low</HeaderCell>
                        <HeaderCell hasOverflow>
                            <OverflowMenu />
                        </HeaderCell>
                    </HeaderRow>
                </Head>
                <Body>
                    <Row>
                        <Cell>First reply time</Cell>
                        <Cell>20s</Cell>
                        <Cell>11h 30m</Cell>
                        <Cell>30m</Cell>
                        <Cell>20m</Cell>
                        <Cell hasOverflow>
                            <OverflowMenu />
                        </Cell>
                    </Row>
                    <Row>
                        <Cell>Next reply time</Cell>
                        <Cell>30s</Cell>
                        <Cell>30m 30s</Cell>
                        <Cell>30m</Cell>
                        <Cell>0m</Cell>
                        <Cell hasOverflow>
                            <OverflowMenu />
                        </Cell>
                    </Row>
                </Body>
            </Table>
        </div>
    );

    return (
        <>
            <Well>
                <Title>Reply metrics</Title>
                Set how quickly you respond to a customer's request
                <div className="table">
                    <Tables/>
                </div>
            </Well>
        </>
    )
};

export default Example;
