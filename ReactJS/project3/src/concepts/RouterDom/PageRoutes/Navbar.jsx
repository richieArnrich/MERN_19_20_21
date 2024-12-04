import React from "react";
import "./NavStyles.css";
import { Link } from "react-router-dom";
function Navbar() {
  return (
    <div className="navbar">
      <div className="nav-brand">My Brand</div>
      <div className="nav-links">
        <Link to="/" className="nav-link">
          Home
        </Link>
        <Link to="/contact" className="nav-link">
          Contact
        </Link>
        <Link to="/about" className="nav-link">
          About
        </Link>
      </div>
    </div>
  );
}

export default Navbar;
