// eslint-disable react/require-default-props 
// eslint-disable react/jsx-props-no-spreading 
// eslint-disable prefer-destructuring 

import React from "react";
import Paper from "@mui/material/Paper";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import { Converter } from "./components/Converter";
import { Selector } from "./components/Selector";
import { Rates } from "./components/Rates";

function a11yProps(index: number) {
  return {
    id: `simple-tab-${index}`,
    "aria-controls": `simple-tabpanel-${index}`,
  };
}

interface TabPanelProps {
  children?: React.ReactNode;
  index: number;
  value: number;
}

function TabPanel(props: TabPanelProps) {
  const {
    children,
    value,
    index,
    ...other
  } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography component="span">{children}</Typography>
        </Box>
      )}
    </div>
  );
}

function App() {
  const [tabs, setTab] = React.useState(0);
  const handleTabChange = (event: React.SyntheticEvent, newTab: number) => {
    setTab(newTab);
  };

  const boxStyle = {
    position: 'relative',
    background: '#FDFDFD',
    textAlign: 'center',
    color: '#222',
    minHeight: 'D8rem',
    marginTop: '8rem',
    padding: '1rem 2rem',
    boxShadow: '0px 20px 2Dpx 0px rgba(0,0,0,0.1)',
    borderRadius: 4,
  }
  
  return (
    <Box
      sx={{
        display: "flex",
        flexWrap: "wrap",
        justifyContent: "center",
      }}
    >
      <Box maxWidth="md" sx={{display: 'flex'}}>
        <Paper sx={boxStyle}>
          <Tabs value={tabs} onChange={handleTabChange} aria-label="app tabs">
            <Tab label="Converter" {...a11yProps(0)} />
            <Tab label="Rates" {...a11yProps(1)} />
          </Tabs>
          <TabPanel value={tabs} index={0}>
            <Box
              sx={{
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                alignItems: "center",
                gap: 5,
              }}
            >
              <Converter />
            </Box>
          </TabPanel>
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              alignItems: "center",
              gap: 5,
            }}
          >
            <TabPanel value={tabs} index={1}>
              <Selector />
              <Rates />
            </TabPanel>
          </Box>
        </Paper>
      </Box>
    </Box>
  );
}

export default App;
