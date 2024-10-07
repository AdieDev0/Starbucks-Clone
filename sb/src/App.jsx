import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Nav from "./Components/Nav";
import Head from "./Components/Head";
import Almost from "./Components/Almost";
import Last from "./Components/Last";
import Rewards from "./Section/Rewards";

const App = () => {
  return (
    <Router>
      <Nav />
      <Routes>
        <Route
          path="/"
          element={
            <>
              <Head />
              <Almost />
              <Last />
            </>
          }
        />
        <Route path="/rewards" element={<Rewards />} />
        {/* Add other routes as needed */}
      </Routes>
    </Router>
  );
};

export default App;
