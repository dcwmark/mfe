import React from 'react';
import { Link, NavLink } from 'react-router-dom';

import './Navbar.css'

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="container">
        <Link className="navbar-brand" to="/"><h2>MFE</h2></Link>
        <ul className="navbar-nav">
          <li><NavLink exact to="/">Home</NavLink></li>
          <li><NavLink to="/mfe-a">mfe-a</NavLink></li>
          <li><NavLink to="/mfe-b">mfe-b</NavLink></li>
          <li><NavLink to="/mfe-c">mfe-c</NavLink></li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
