import React from "react";
import { Link } from "react-router-dom";

const NavBar = () => (
  <>
    <nav className="navbar navbar-expand-lg navbar-light bg-light d-flex justify-content-center font-weight-bold py-5">
      <Link className="mx-3 Link text-decoration-none" to="/">
        <h3 className="fw-bold">Home</h3>
      </Link>
      <Link className="text-decoration-none" to="/add">
        <h3 className="fw-bold">Add Character</h3>
      </Link>
    </nav>
  </>
);

export default NavBar;
