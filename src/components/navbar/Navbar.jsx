import React, { useState } from 'react';
import { RiMenu3Line, RiCloseLine } from 'react-icons/ri';
import './navbar.css';
import logo from '../../assets/logo.svg';
import { MenuItems } from './MenuItem';


function Navbar() {
  const[toggoleMenu, setToggoleMenu] = useState(false);

  return (
    <nav className="navbar">
    <div className="woonders_navbar">
      <div className="woonders_navbar-links">
      <div className="woonders_navbar-links_logo">
        <a href='#home'><img src={logo} alt="logo" /></a>
      </div>
      <div className="woonders_navbar-links_container">
          <ul>
          {MenuItems.map((item, index) => {
            return (
            
              <li key={index}><a className={item.cName} href={item.url}>{item.title}</a></li>
          
            )
          })}
          <button>Purchase $23</button>
          </ul>
      </div>
      <div className="woonders_navbar-menu">
          {toggoleMenu ? <RiCloseLine color="#000" size={27} onClick={() => setToggoleMenu(false)}/>
           : <RiMenu3Line color="#000" size={27} onClick={() => setToggoleMenu(true)}/>
           }
           {toggoleMenu && (
            <div className="woonder_navbar-menu_container scale-up-center">
              <div className="woonders_navbar-menu_container-links">
              <ul>
          {MenuItems.map((item, index) => {
            return (
            
              <li key={index}><a className={item.cName} href={item.url}>{item.title}</a></li>
          
            )
          })}
          <button>Purchase $23</button>
          </ul>
              </div>
            </div>
           )}
      </div>
      </div>
    </div>
    </nav>
  )
}

export default Navbar;
