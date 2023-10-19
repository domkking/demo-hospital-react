import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import Tables from "./components/Table";
import SignIn from "./components/SignIn";
import HomePage from "./components/HomePage";

import doctor from "./json/Doctor.json"

import { TableContext, UserContext } from "./context/LevelContext";

function App() {
  const doctorUser = JSON.stringify(doctor);      
   
  const urlAllDoctor = "http://localhost:8080/doctor";    
  const urlPatient = "http://localhost:8080/patient/DNNDNC03L09C134E";
  


  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/signIn" element={<SignIn/>}/>
        <Route
          path="/doctor"
          element={
            <UserContext.Provider value="DOCTOR"> 
              <TableContext.Provider value={doctorUser}>
                <Tables />
              </TableContext.Provider>
            </UserContext.Provider>
          }
        />
        <Route
          path="/patient"
          element={
            <UserContext.Provider value="PATIENT">
              <TableContext.Provider value={urlPatient}>
                <Tables />
              </TableContext.Provider>
            </UserContext.Provider>
          }
        />
        <Route
          path="/administrator"
          element={
            <UserContext.Provider value="ADMIN">
              <TableContext.Provider value={urlAllDoctor}>
                <Tables />
              </TableContext.Provider>
            </UserContext.Provider>
          }
        />
      </Routes>
    </Router>
  );
}

export default App;
