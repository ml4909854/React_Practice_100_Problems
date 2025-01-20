import React from "react";
import { Link } from "react-router-dom";
const Navbar = () => {
  return (
    <div style={{ display: "flex", gap: "10px" }}>
      <Link to="/">Home</Link>
      <Link to="contact">Contact</Link>
      <Link to="about">About</Link>
      <Link to="dashboard">Dashboard</Link>
    </div>
  );
};

export default Navbar;
