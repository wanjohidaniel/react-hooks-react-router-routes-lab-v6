import React from "react";
import { NavLink } from "react-router-dom";
import "./NavBar.css";

function NavBar() {
  return (
    <nav className="navbar">
      <NavLink exact to="/" activeClassName="active">Home</NavLink>
      <NavLink exact to="/directors" activeClassName="active">Directors</NavLink>
      <NavLink exact to="/actors" activeClassName="active">Actors</NavLink>
    </nav>
  );
}

export default NavBar;
