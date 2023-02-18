import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="Navbar">
      <nav className="navbar navbar-expand-lg bg-body-tertiary">
        <div className="d-flex flex-row mb-3">
          <Link to="/" className='nav-link active p-2'>Home</Link>
          <Link to="/Delete" className='nav-link active p-2'>Delete</Link>
          <Link to="/View" className='nav-link active p-2'>View</Link>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
