import * as React from "react";
import { useNavigate } from "react-router-dom";

import Box from "@mui/material/Box";
import Link from "@mui/material/Link";
import Grid from "@mui/material/Grid";
import Button from "@mui/material/Button";
import Avatar from "@mui/material/Avatar";
import Checkbox from "@mui/material/Checkbox";
import TextField from "@mui/material/TextField";
import Typography from "@mui/material/Typography";
import CssBaseline from "@mui/material/CssBaseline";
import FormControlLabel from "@mui/material/FormControlLabel";
import HealthAndSafetyOutlinedIcon from "@mui/icons-material/HealthAndSafetyOutlined";
import { createTheme, ThemeProvider } from "@mui/material/styles";

import doctor from "../json/DoctorList.json";

function Copyright(props: any) {
  return (
    <Typography
      variant="body2"
      color="text.secondary"
      align="center"
      {...props}
    >
      {"Copyright © "}
      <Link color="inherit" href="https://mui.com/">
        Your Website
      </Link>
      {new Date().getFullYear()}
    </Typography>
  );
}


//////////////////START///////////////////

const defaultTheme = createTheme();
function SignIn({setUserSelected, userSelected}) {
  const navigate = useNavigate();

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    const username = data.get("username");
    const password = data.get("password");

    const matchingDoctor = doctor
      .filter(
        (doctorT) =>
          doctorT.doctorCode === username && doctorT.doctorLastname === password
      )
      .map((doctorT) => doctorT.doctorCode && doctorT.doctorLastname);

    if (matchingDoctor.length > 0) {
      setUserSelected(userSelected);
      navigate(`signIn/${userSelected}`);
      console.log(`/${userSelected}`);

    } else {
      alert("doctor not found");
    }
  };

  return (
    <ThemeProvider theme={defaultTheme}>
      <Grid container component="main" sx={{ height: "100vh" }} columns={12}>
        <CssBaseline />
        <Grid item md={6}>
          <Box
            sx={{
              marginTop: 8,
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
            }}
          >
            <Avatar sx={{ m: 1, bgcolor: "transparent" }}>
              <HealthAndSafetyOutlinedIcon
                sx={{ color: "#0fa564", fontSize: "40px" }}
              />
            </Avatar>
            <Typography component="h1" variant="h5">
              Sign In [{userSelected}]
            </Typography>
            <Box
              component="form"
              onSubmit={handleSubmit}
              noValidate
              sx={{ mt: 1, padding: "2em" }}
            >
              <TextField
                margin="normal"
                required
                fullWidth
                id="username"
                label="Username"
                name="username"
                autoComplete="username"
                autoFocus
              />
              <TextField
                margin="normal"
                required
                fullWidth
                name="password"
                label="Password"
                type="password"
                id="password"
                autoComplete="current-password"
              />
              <FormControlLabel
                control={<Checkbox value="remember" color="primary" />}
                label="Remember me"
              />
              <Button
                type="submit"
                fullWidth
                variant="contained"
                sx={{ mt: 3, mb: 2 }}
              >
                Sign In
              </Button>
              <Grid container>
                <Grid item xs>
                  <Link href="#" variant="body2">
                    Forgot password?
                  </Link>
                </Grid>
                <Grid item>
                  <Link href="#" variant="body2">
                    {"Don't have an account? Sign Up"}
                  </Link>
                </Grid>
              </Grid>
            </Box>
            <Copyright sx={{ mt: 8, mb: 4 }} />
          </Box>
        </Grid>
        <Grid item md={6} sx={{ height: "100vh" }}>
          <Box
            sx={{
              backgroundImage:
                "url(https://source.unsplash.com/random?wallpapers)",
              backgroundRepeat: "no-repeat",
              width: "100%",
              height: "100%",
            }}
          />
        </Grid>
      </Grid>
    </ThemeProvider>
  );
}

export default SignIn;