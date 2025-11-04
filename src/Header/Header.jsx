import { NavLink } from "react-router-dom";
import React from "react";

import "./Header.css";

function Header() {
  return (
    <header className="header">
      <NavLink to="/">🏠home</NavLink>
      <NavLink to="/spacecrafts">🛸Spacecrafts</NavLink>
      <NavLink to="/planets">🌍Planets</NavLink>
    </header>
  );
}

export default Header;
