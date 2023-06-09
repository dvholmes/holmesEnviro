import React from 'react';
import '../App.css'

const NavBar = () => {
  return (
    <nav className = "navbar">
      <ul className = "navbar-nav">
        <li className="nav-item">
          <a href="/"className="nav-link" >Home</a>
        </li>
      
        <li className="nav-item" > 
          <a href="/products" className="nav-link">Products</a>
        </li>
        <li className="nav-item">
          <a href="https://pesticideazure20181023011716.azurewebsites.net/Login.aspx" className="nav-link" >Pesticide Tracking</a>
        </li >
        <li className="nav-item" >
          <a href="/gallery" className="nav-link">Gallery</a>
        </li>
        <li className="nav-item">
          <a href="/products" className="nav-link" >Contacts</a>
        </li>
      </ul>
    </nav>
  );
};

export default NavBar;
