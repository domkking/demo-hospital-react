import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Tables from "./components/Table";
import SignIn from "./components/SignIn";
import { TableContext, UserContext } from "./context/LevelContext";
import { useState } from "react";
import Layout from "./components/HomePage";

function App() {
  const [userSelected, setUserSelected] = useState("");

  const allUrl = `http://localhost:8080/${userSelected}`;

  return (
    <Router>
      <Routes>
        <Route
          path="/"
          element={
            <Layout
              userSelected={userSelected}
              setUserSelected={setUserSelected}
            />
          }
        />
        <Route
          path="/signIn"
          element={
            <SignIn
              userSelected={userSelected}
              setUserSelected={setUserSelected}
            />
          }
        />
        <Route
          path="signIn/:role/*"
          element={
            <UserContext.Provider value={userSelected.toUpperCase()}>
              <TableContext.Provider value={allUrl}>
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
