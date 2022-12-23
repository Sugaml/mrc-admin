import * as React from 'react';
import PropTypes from 'prop-types';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import { Transactions } from './Transaction';
import { DashboardContent } from './DashboardContent';
import { Students } from './Students';
import { Courses } from './Courses';
import { Users } from './Users';

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`vertical-tabpanel-${index}`}
      aria-labelledby={`vertical-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

function a11yProps(index) {
  return {
    id: `vertical-tab-${index}`,
    'aria-controls': `vertical-tabpanel-${index}`,
  };
}

export const Dashboard=()=> {
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Box
      sx={{ width: '100%',
        height: '100%', flexGrow: 1, bgcolor: 'background.paper', display: 'flex' }}
    >
      <Tabs
        orientation="vertical"
        variant="scrollable"
        value={value}
        onChange={handleChange}
        aria-label="Vertical tabs example"
        sx={{ borderRight: 1, borderColor: 'divider' }}
      >
        <Tab label="Dashboard" {...a11yProps(0)} />
        <Tab label="Courses" {...a11yProps(1)} />
        <Tab label="Users" {...a11yProps(2)} />
        <Tab label="Students" {...a11yProps(3)} />
        <Tab label="Payments" {...a11yProps(4)} />
      </Tabs>
      <TabPanel value={value} index={0}>
       <DashboardContent/>
      </TabPanel>
      <TabPanel value={value} index={1}>
       <Courses/>
      </TabPanel>
      <TabPanel value={value} index={2}>
       <Users/>
      </TabPanel>
      <TabPanel value={value} index={3}>
       <Students/>
      </TabPanel>
      <TabPanel value={value} index={4}>
      <Transactions/>
      </TabPanel>
    </Box>
  );
}