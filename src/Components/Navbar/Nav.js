import React from 'react'
import { Link } from "react-router-dom"
import "./Nav.css"
// import About from '../../Pages/About'
const Nav = () => {
    return (
      <nav className="nav">
        <ul className="link-container">
          <li>
            <Link className="link" to="/">
              Home
            </Link>
          </li>
          <li >
            <Link className="link" to="/about">
              About
            </Link>
          </li>
          <li >
            <Link className="link" to="/contacts">
            
              Contacts
            </Link>
          </li>
        </ul>
      </nav>
    );
}

export default Nav
