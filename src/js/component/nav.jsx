import React from "react";

const NavBar = () => {
  return (
    
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark text-end">
      <a className="navbar-brand" href="#">Navbar</a>
      <ul className="navbar-nav">
        <li className="nav-item">
          <a className="nav-link" href="#">Home</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#">About</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#">Contact</a>
        </li>
      </ul>
    </nav>
  );
};

export default NavBar;