import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import '../Main.css';
import { ThemeProvider, DEFAULT_THEME } from '@zendeskgarden/react-theming'
import { Col, Grid, Row } from '@zendeskgarden/react-grid'
import { Anchor, Button } from '@zendeskgarden/react-buttons';
import { Tab, TabList, TabPanel, Tabs } from '@zendeskgarden/react-tabs'
import { Breadcrumb } from '@zendeskgarden/react-breadcrumbs'
import { SM, XL, Span } from '@zendeskgarden/react-typography'

import DragTable from "../components/DragTable";

function Dashboard() {

  interface IItem {
    id: string;
    name: string;
    description: string;
  }

  // Will become dyanmic (state)
  const [indivPolicies, setIndivPolicies] = useState<IItem[]>([
    {
      id: '1',
      name: 'VIP',
      description: 'Policy for VIP contract customers'
    },
    {
      id: '2',
      name: 'Another Policy',
      description: 'Simply another SLA policy'
    },
  ]);

  // Will become dyanmic (state)
  const [groupPolicies, setGroupPolicies] = useState<IItem[]>([
    {
      id: '1',
      name: 'VIP Group',
      description: 'Policy for VIP groups'
    },
    {
      id: '2',
      name: 'Another Group Policy',
      description: 'Simply another group SLA policy'
    },
  ]);

  const navigate = useNavigate();

  interface SLAPolicy {
    name: String,
    description: String,
  }

  // 1 if adding Group SLA Policies
  const [groupSelect, setGroupSelect] = useState<Number>(0);

  interface SLATabProps {
    indivPolicies: IItem[];
    groupPolicies: IItem[];
  }

  function SLATab(props: SLATabProps) {

    const [selected, setSelected] = useState('Indiv-SLA');

    function navigateAdd() {
      navigate('/add-policy');
    }

    return (
      <Tabs selectedItem={selected} onChange={setSelected}>
        <Grid>
          <Row>
            <Col size={10} style={{ padding: 0 }}>
              <TabList className="SLAs">
                <Tab item="Indiv-SLA">SLAs</Tab>
                <Tab item="Group-SLA">Group SLAs</Tab>
              </TabList>
            </Col>
            <Col size={2} style={{ padding: 0 }}>
              <Button isPrimary className="addButton" onClick={navigateAdd}>Add Policy</Button>
            </Col>
          </Row>
          <Row>
            <TabPanel item="Indiv-SLA">
              <SM>Policies are applied to tickets in the order they appear. Drag to reorder as needed. </SM>
              <DragTable defaultItems={props.indivPolicies} />
            </TabPanel>
            <TabPanel item="Group-SLA">
              <SM>Policies are applied to tickets in the order they appear. Drag to reorder as needed. </SM>
              <DragTable defaultItems={props.groupPolicies} />
            </TabPanel>
          </Row>
        </Grid>
      </Tabs>
    )
  }


  async function fetchPolicies() {
    await fetch("https://", {
      method: 'GET',
    })
    .then(response => {return response.json()})
    // Parse, load, and store the policy data
    .then(data => {return 0})
  }

  useEffect(() => {
    fetchPolicies();
  }, [])

  return (
    <>
      <ThemeProvider theme={DEFAULT_THEME}>
        <div className="page">
          <Breadcrumb>
            <Anchor href="#">Objects & rules</Anchor>
            <Span>Service level agreements</Span>
          </Breadcrumb>
          <div className="description">
            <XL className="title">Service level agreements</XL>
            <SM>A Service Level Agreement (SLA) is a contract between you and your customers that specifies performance measures for support by ticket priority. For example, we respond to urgent tickets in ten minutes and resolve them within two hours. A Group SLA is an agreement you have with internal teams. Your policies are applied to tickets in the order they appear on this page, so drag to reorder as needed. <Anchor isExternal href="https://garden.zendesk.com/">Learn about SLAs and Group SLAs</Anchor></SM>
          </div>
          <SLATab indivPolicies={indivPolicies} groupPolicies={groupPolicies} />
        </div>
      </ThemeProvider>
    </>
  );
}

export default Dashboard;