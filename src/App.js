import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { UserProvider } from "./Umar/UserContext";
import Home from "./Umar/Home";
import UserDetails from "./Umar/UserDetails";

function App() {
  return (
    <UserProvider>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/user-details" element={<UserDetails />} />
        </Routes>
      </Router>
    </UserProvider>
  );
}

export default App;