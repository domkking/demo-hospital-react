import { Link } from "react-router-dom";

import SiteTitle from "./SiteTitle";
import ActionAreaCard from "./Cards";

import "animate.css";
import "../components_Css/SiteTitle.css";

import Grid from "@mui/material/Grid";
import MasksIcon from "@mui/icons-material/Masks";
import PersonSharpIcon from "@mui/icons-material/PersonSharp";
import SupervisorAccountSharpIcon from "@mui/icons-material/SupervisorAccountSharp";

export default function HomePage({ userSelected, setUserSelected }) {
  //const [userSelected, setUserSelected] = useState("");
  const handleUserSelection = (selectedUser) => {
    setUserSelected(selectedUser);
    console.log("user: " + selectedUser);
  };  
  
  const icon = [
    <MasksIcon sx={{ fontSize: "130px", color: "#0fa564" }} />,
    <PersonSharpIcon sx={{ fontSize: "130px", color: "#4444ff" }} />,
    <SupervisorAccountSharpIcon sx={{ fontSize: "130px", color: "#808080" }} />,
  ];

  const gridStyle = {
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
  };

  const removeUnderLine: React.CSSProperties = {
    textDecoration: "none",
  };

  return (
    <Grid container spacing={2} sx={{ height: "100vh", overflow: "auto" }}>
      <Grid item xs={12} sm={12} md={12}>
        <SiteTitle title="DEMO HOSPITAL" color="#0FA564" />
      </Grid>
      <Grid
        item
        xs={12}
        sm={12}
        md={4}
        sx={gridStyle}
        className="animate__animated animate__fadeInDown"
      >
        <Link to="/signIn" style={removeUnderLine} onClick={() => handleUserSelection("doctor")}>
          <ActionAreaCard icon={icon[0]} color="#0FA564">
            Hi, I'm a DOCTOR
          </ActionAreaCard>
        </Link>
      </Grid>

      <Grid
        item
        xs={12}
        sm={12}
        md={4}
        sx={gridStyle}
        className="animate__animated animate__fadeInUp"
      >
        <Link to="/signIn" style={removeUnderLine} onClick={() => handleUserSelection("patient")}>
          <ActionAreaCard icon={icon[1]} color="#4444ff">
            Hi, I'm a PATIENT
          </ActionAreaCard>
        </Link>
      </Grid>

      <Grid
        item
        xs={12}
        sm={12}
        md={4}
        sx={gridStyle}
        className="animate__animated animate__fadeInDown"
      >
        <Link to="/signIn" style={removeUnderLine} onClick={() => handleUserSelection("administrator")}>
          <ActionAreaCard icon={icon[2]} color="#808080">
            Hi, I'm an ADMINISTRATOR
          </ActionAreaCard>
        </Link>
      </Grid>
    </Grid>
  );
}
