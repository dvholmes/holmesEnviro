
import React, { useState } from 'react';
import '../css_file/header.css'
import { AlignJustify,ArrowRightCircle,User,Image, Search } from 'react-feather';
import { NavLink } from 'react-router-dom';


const Header = () => {

  const [subNavVisible,setSubNaVisible] = useState(false)

  const showMenu= () => {
    setSubNaVisible(!subNavVisible);

  }
    return (

      <div className = 'header-container'>
        
        <header className = 'header_class'>


            <div className = "left_logo_container">
                <img src = "logo-png.png" alt="Logo"/>
            </div>

            <div className = "left_title_container">
              <h1 className = "header_title">Holmes Enviro</h1>
            </div>

            <nav className="navbar-container">
              <ul className="navbar-list">
                <li className="navbar-item">
                  <NavLink exact to="/" className="nav-link-text" activeClassName="active">
                    About
                  </NavLink>
                </li>
                <li className="navbar-item">
                  <NavLink to="/gallery" className="nav-link-text" activeClassName="active">
                    Image Gallery
                  </NavLink>
                </li>
                <li className="navbar-item">
                  <a href="https://pesticideazure20181023011716.azurewebsites.net/Login.aspx" className="nav-link-text">
                    Pesticide Tracker
                  </a>
                </li>
              </ul>
            </nav>
    

            <div className='button_container'>
              <AlignJustify className = 'nav-menu-icon'  onClick={() => showMenu()}/>
            </div>

            <div className = "right-side-image">

                <img src="OMRI-listed-cmyk_small.png" alt="OMRI_License"/>

            </div>
        </header>


        <div className={`response-nav-container ${subNavVisible ? 'slide-out' : ''}`}>
          
            <ArrowRightCircle className = 'sidebar-close-button'onClick={() => showMenu()}/>

            <nav className = "sidebar-container">
                <ul className = "sidebar-list">

                  <li className ="sidebar-item">
                    <User className = 'sidebar-icon'/>
                    <NavLink exact to="/" className="sidebar-text" activeClassName="active">About</NavLink>
                  </li>
                  <li className ="sidebar-item">
                    <Image className = 'sidebar-icon'/>
                    <NavLink to="/gallery" className="sidebar-text" activeClassName="active">Image Gallery</NavLink>
                  </li>
                
                  <li className ="sidebar-item">
                    <Search className = 'sidebar-icon'/>
                    <a href="https://pesticideazure20181023011716.azurewebsites.net/Login.aspx" className = "sidebar-text">Pesticde Tracker</a>
                  </li>
                
                </ul>
            </nav>


          </div>
    
        

      </div>
    );
};

export default Header;