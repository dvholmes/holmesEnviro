import React from 'react';
import '../App.css'

const NavBar = () => {
  return (
    <nav className = "navbar">
      <ul className = "navbar-nav">
        <li className="nav-item">
          <a href="https://chat.openai.com/"className="nav-link" >Home</a>
        </li>
        <li className="nav-item">
          <a href="https://chat.openai.com/" className="nav-link" >Contacts</a>
        </li>
        <li className="nav-item" > 
          <a href="https://chat.openai.com/" className="nav-link">Products</a>
        </li>
        <li className="nav-item">
          <a href="https://chat.openai.com/" className="nav-link" >Pesticide Tracking</a>
        </li >
        <li className="nav-item" >
          <a href="https://chat.openai.com/" className="nav-link">Gallery</a>
        </li>
      </ul>
    </nav>
  );
};

export default NavBar;
