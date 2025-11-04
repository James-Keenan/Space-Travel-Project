import styles from "./App.module.css";
import React from "react";
import { Routes, Route } from "react-router-dom";

import HomePage from "./Pages/HomePage.jsx";
import Spacecrafts from "./Pages/Spacecrafts.jsx";

function App() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/spacecrafts" element={<Spacecrafts />} />
      <Route path="/planets" element={<Planets />} />
      <Route path="*" element={<NotFoundPage />} />
    </Routes>
  );
}

export default App;
