import React from "react";
import { Link } from "react-router-dom";

const NavBar = () => (
  <>
    <nav className="navbar navbar-expand-lg navbar-light bg-light d-flex justify-content-center font-weight-bold">
      <Link className="mx-2 Link" id="home" to="/">
        Home
      </Link>
      <Link className="Link" to="/add">
        Add Character
      </Link>
    </nav>
  </>
);

export default NavBar;
