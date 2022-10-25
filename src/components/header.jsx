import React from 'react'
import { Link } from "react-router-dom";
const Header = () => {
  return (
    <header>
        <div className="logo">
            <span>JLIBRARY</span>
        </div>
        <ul>
            <li><Link to='/'>Home</Link></li>
            <li><Link to='/about'>ABOUT</Link></li>
        </ul>
    </header>
  )
}

export default Header