import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Tables from "./components/Table";
import SignIn from "./components/SignIn";
import Layout from "./components/Layout";
import HomePage from "./components/HomePage";
import { TableContext, UserContext } from "./context/LevelContext";
import { useState } from "react";

function App() {
  const allUrl = [
    "http://localhost:8080/doctor",
    "http://localhost:8080/patient",
  ];

  const [userSelected, setUserSelected] = useState("administrator");

  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/signIn" element={<SignIn setUserSelected={setUserSelected} userSelected={userSelected}/>} />
        <Route path="/layout" element={<Layout userSelected={setUserSelected} setUserSelected={setUserSelected}/>} />
        <Route
          path="signIn/doctor"
          element={
            <UserContext.Provider value="DOCTOR">
              <TableContext.Provider value={allUrl[0]}>
                <Tables />
              </TableContext.Provider>
            </UserContext.Provider>
          }
        />
        <Route
          path="signIn/patient"
          element={
            <UserContext.Provider value="PATIENT">
              <TableContext.Provider value={allUrl[1]}>
                <Tables />
              </TableContext.Provider>
            </UserContext.Provider>
          }
        />
        <Route
          path="signIn/administrator"
          element={
            <UserContext.Provider value="ADMIN">
              <TableContext.Provider value={allUrl[0]}>
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
