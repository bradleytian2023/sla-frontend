import React, { useState } from 'react';
import { Dropdown, Field, Menu, Item, Select, Label } from '@zendeskgarden/react-dropdowns';
import { Col, Grid, Row } from '@zendeskgarden/react-grid';

interface IItem {
  label: string;
  value: string;
}

const items = [
  { label: 'Calendar hours', value: 'item-1' }
];

const HoursDropdown = () => {
  const [selectedItem, setSelectedItem] = useState(items[0]);

  return (
    <>
      <Grid>
        <Row justifyContent="center">
          <Col sm={5}>
            <Dropdown
              selectedItem={selectedItem}
              onSelect={setSelectedItem}
              downshiftProps={{ itemToString: (item: IItem) => item && item.label }}
            >
              <Field style = {{width:'25%'}}>
                <Label >Hours of operation</Label>
                <Select>{selectedItem.label}</Select>
              </Field>
              <Menu>
                {items.map(option => (
                  <Item key={option.value} value={option}>
                    {option.label}
                  </Item>
                ))}
              </Menu>
            </Dropdown>
          </Col>
        </Row>
      </Grid>
    </>
  );
};

export default HoursDropdown;
