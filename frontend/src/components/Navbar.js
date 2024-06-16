import React from "react";
import { NavLink } from "react-router-dom";
import "./Navbar.css";

export default function Navbar() {
  return (
    <div className="topnav">
      <NavLink exact to="/" activeClassName="active">
        Home
      </NavLink>
      <NavLink to="/news" activeClassName="active">
        News
      </NavLink>
      <NavLink to="/contact" activeClassName="active">
        Contact
      </NavLink>
      <NavLink to="/about" activeClassName="active">
        About
      </NavLink>
    </div>
  );
}
