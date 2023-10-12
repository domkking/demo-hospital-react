import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import DoctorTable from "./components/Doctor";
import HomePage from "./components/HomePage";
import { UserContext } from "./context/LevelContext";
import PatientTable from "./components/Patient";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route
          path="/doctor"
          element={
            <UserContext.Provider value="Admin">
              <DoctorTable />
            </UserContext.Provider>
          }
        />
        <Route
          path="/patient"
          element={
            <UserContext.Provider value="PATIENT">
              <PatientTable />
            </UserContext.Provider>
          }
        />
      </Routes>
    </Router>
  );
}

export default App;
