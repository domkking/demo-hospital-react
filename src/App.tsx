import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import Tables from "./components/Table";
import HomePage from "./components/HomePage";

import patientList from "./json/Patient.json";
import doctorList from "./json/DoctorList.json";

import { TableContext, UserContext } from "./context/LevelContext";

function App() {
  const doctor = JSON.stringify(doctorList);
  const patient = JSON.stringify(patientList);
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route
          path="/doctor"
          element={
            <UserContext.Provider value="Admin">
              <TableContext.Provider value={doctor}>
                <Tables />
              </TableContext.Provider>
            </UserContext.Provider>
          }
        />
        <Route
          path="/patient"
          element={
            <UserContext.Provider value="PATIENT">
              <TableContext.Provider value={patient}>
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
