import * as React from "react";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Box from "@mui/material/Box";
import { UserContext } from "../context/LevelContext";
import Tables from "./Table";
import MedicineCards from "./MedicineCards";

interface TabPanelProps {
  children?: JSX.Element;
  index: number;
  value: number;
}
function TabPanel(props: TabPanelProps) {
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
         {children}
        </Box>
      )}
    </div>
  );
}

function a11yProps(index: number) {
  return {
    id: `vertical-tab-${index}`,
    "aria-controls": `vertical-tabpanel-${index}`,
  };
}

export default function VerticalTabs() {
  const handleUserSelection = (selectedUser) => {
    setUserSelected(selectedUser);
    console.log("user: " + selectedUser);
  };

  const [value, setValue] = React.useState(0);
  const [userSelected, setUserSelected] = React.useState("");

  const handleChange = (_event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };

  return (
    <Box
      sx={{
        flexGrow: 1,
        bgcolor: "background.paper",
        display: "flex",
        height: "100vh",
        color: "#000",
      }}
    >
      <Tabs
        orientation="vertical"
        variant="scrollable"
        value={value}
        onChange={handleChange}
        aria-label="Vertical tabs example"
        sx={{ borderRight: 1, borderColor: "divider" }}
      >
        <Tab
          label="Doctors"
          {...a11yProps(0)}
          onClick={() => handleUserSelection("doctor")}
        />
        <Tab label="Patients" {...a11yProps(1)} />
        <Tab label="Sickness" {...a11yProps(2)} />
      </Tabs>

      <TabPanel value={value} index={0}>
        <UserContext.Provider value={userSelected.toUpperCase()}>
          <Tables />
        </UserContext.Provider>
      </TabPanel>
      <TabPanel value={value} index={1}>
        <UserContext.Provider value={userSelected.toUpperCase()}>
          <Tables />
        </UserContext.Provider>
      </TabPanel>
      <TabPanel value={value} index={2}>
        <UserContext.Provider value={userSelected.toUpperCase()}>
          <MedicineCards />
        </UserContext.Provider>
      </TabPanel>
    </Box>
  );
}
