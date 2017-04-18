import React from 'react'
import { NavLink } from 'react-router-dom'

import './header.css'

const Header = () => (
    <div>
        <NavLink exact to="/" activeClassName="selected">Home</NavLink>
        <NavLink to="/about" activeClassName="selected">About</NavLink>
        <NavLink to="/contact" activeClassName="selected">Contact</NavLink>
    </div>
)

export default Header