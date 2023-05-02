import { Well, Title } from '@zendeskgarden/react-notifications';
import { useState } from 'react';
import { Row, Col } from '@zendeskgarden/react-grid';
import { SplitButton, Button, ChevronButton } from '@zendeskgarden/react-buttons';
import { Dropdown, Menu, Item, Trigger } from '@zendeskgarden/react-dropdowns';
import { ThemeProvider, DEFAULT_THEME } from '@zendeskgarden/react-theming';
import { ReactComponent as ChevronIcon } from '@zendeskgarden/svg-icons/src/16/chevron-down-stroke.svg';
import ButtonGroup from './ButtonGroup';
import { SM, MD, LG, XL, XXL, XXXL } from '@zendeskgarden/react-typography';
import { Field, Label, Input } from '@zendeskgarden/react-forms';
import { Anchor } from '@zendeskgarden/react-buttons'
import '../Main.css'
import HoursDropdown from './MenuDropdown';

interface props {
  activate: Function;
  render: Function;
}

const Example = (props: props) => {

  const [select, setSelect] = useState(0);

  function ButtonWithDropdown() {

    const [rotated, setRotated] = useState<boolean | undefined>();

    return (
      <Row>
        <Col textAlign="center">
          <Dropdown
            onSelect={item => {
              props.activate(false);
              setSelect(1);
              props.render();
            }}
            onStateChange={options => Object.hasOwn(options, 'isOpen') && setRotated(options.isOpen)}
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
              <Item value={1}>Requester wait time</Item>
              <Item value={2}>Agent work time</Item>
              <Item value={3}>Total resolution time</Item>
              <Item value={4}>Resolution deadline</Item>
            </Menu>
          </Dropdown>
        </Col>
      </Row>
    );
  };

  return (
    <>
      <Well className='step-3-well'>
        <Title>Resolution metrics</Title>
        Set how long you'll take to solve a request.
        <ButtonWithDropdown />
      </Well>
      <RequesterWait option={select} />
    </>
  )
};

interface requesterProps {
  option: number;
}

function RequesterWait(props: requesterProps) {
  let selected: number = props.option;
  return (
    <>
      {selected === 1 ?
        <Well>
          <Title>Requester wait time</Title>
          <div className='textInWell'>
            <MD style={{ color: '#68737D' }}>The time between each public comment from agents, displayed in minutes. The SLA will pause on Pending.</MD>
          </div>
          <div className='buttonGroup'>
            <ButtonGroup />
          </div>
          <div className='titleSpacing'>
            <LG style={{ color: 'black' }}>Set target time</LG>
          </div>
          <div className='medTextNearTitle'>
            <MD isBold style={{ color: 'black' }}>Urgent tickets</MD>
          </div>
          <div style={{ display: 'flex' }} className='inputSize'>
            <span>
              <div className='inputSpacing'>
                <Field>
                  <Label isRegular>Hours</Label>
                  <Input />
                </Field>
              </div>
            </span>
            <span>
              <div className='inputSpacing'>
                <Field>
                  <Label isRegular>Minutes</Label>
                  <Input />
                </Field>
              </div>
            </span>
            <span>
              <div className='inputSpacing'>
                <Field>
                  <Label isRegular>Seconds</Label>
                  <Input />
                </Field>
              </div>
            </span>
            <span>
              <HoursDropdown />
            </span>
          </div>
          <div className='medText'>
            <MD isBold style={{ color: 'black' }}>High priority tickets</MD>
          </div>
          <div style={{ display: 'flex' }} className='inputSize'>
            <span>
              <div className='inputSpacing'>
                <Field>
                  <Label isRegular>Hours</Label>
                  <Input />
                </Field>
              </div>
            </span>
            <span>
              <div className='inputSpacing'>
                <Field>
                  <Label isRegular>Minutes</Label>
                  <Input />
                </Field>
              </div>
            </span>
            <span>
              <div className='inputSpacing'>
                <Field>
                  <Label isRegular>Seconds</Label>
                  <Input />
                </Field>
              </div>
            </span>
            <span>
              <HoursDropdown />
            </span>
          </div>
          <div className='medText'>
            <MD isBold style={{ color: 'black' }}>Normal priority tickets</MD>
          </div>
          <div style={{ display: 'flex' }} className='inputSize'>
            <span>
              <div className='inputSpacing'>
                <Field>
                  <Label isRegular>Hours</Label>
                  <Input />
                </Field>
              </div>
            </span>
            <span>
              <div className='inputSpacing'>
                <Field>
                  <Label isRegular>Minutes</Label>
                  <Input />
                </Field>
              </div>
            </span>
            <span>
              <div className='inputSpacing'>
                <Field>
                  <Label isRegular>Seconds</Label>
                  <Input />
                </Field>
              </div>
            </span>
            <span>
              <HoursDropdown />
            </span>
          </div>
          <div className='medText'>
            <MD isBold style={{ color: 'black' }}>Low priority tickets</MD>
          </div>
          <div style={{ display: 'flex' }} className='inputSize'>
            <span>
              <div className='inputSpacing'>
                <Field>
                  <Label isRegular>Hours</Label>
                  <Input />
                </Field>
              </div>
            </span>
            <span>
              <div className='inputSpacing'>
                <Field>
                  <Label isRegular>Minutes</Label>
                  <Input />
                </Field>
              </div>
            </span>
            <span>
              <div className='inputSpacing'>
                <Field>
                  <Label isRegular>Seconds</Label>
                  <Input />
                </Field>
              </div>
            </span>
            <span>
              <HoursDropdown />
            </span>
          </div>
          <div className='endPadding'>
            <span>
              <Anchor href="#default">Cancel</Anchor>
            </span>
            <span className='saveButton'>
              <Button size='small'> Save SLA target</Button>
            </span>
          </div>
        </Well>
        : <></>
      }
    </>
  );
}

export default Example;