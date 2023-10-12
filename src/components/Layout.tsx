import Grid from "@mui/material/Grid";

// import axios from 'redaxios'

import SiteTitle from "./SiteTitle";
import ActionAreaCard from "./Cards";
import "../components_Css/SiteTitle.css";
import "animate.css";

import SupervisorAccountSharpIcon from "@mui/icons-material/SupervisorAccountSharp";
import PersonSharpIcon from "@mui/icons-material/PersonSharp";
import MasksIcon from "@mui/icons-material/Masks";
import { Link } from "react-router-dom";

export default function Layout() {
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

  //const [dati, setDati] = useState([]);
  //const url = "http://localhost:8080/doctor";

  // useEffect(() =>{
  //   console.log("200 ok");
  //   axios.get(url).then((response) => {
  //       console.log(response);
  //   });
  // }, [])

  return (
    <Grid container spacing={2} sx={{ height: "100vh" }}>
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
        <ActionAreaCard icon={icon[0]} color="#0FA564">
          Hi, I'm a DOCTOR
        </ActionAreaCard>
      </Grid>

      <Grid
        item
        xs={12}
        sm={12}
        md={4}
        sx={gridStyle}
        className="animate__animated animate__fadeInUp"
      >
        <Link to="/patient" style={removeUnderLine}>
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
        <Link to="/doctor" style={removeUnderLine}>
          <ActionAreaCard icon={icon[2]} color="#808080">
            Hi, I'm an ADMINISTRATOR
          </ActionAreaCard>
        </Link>
      </Grid>
    </Grid>
  );
}
