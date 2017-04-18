import React from 'react'
import CSSModules from 'react-css-modules'
import { NavLink } from 'react-router-dom'

import styles from './header.scss'

const Header = () => (
    <div styleName="wrapper">
        <NavLink exact to="/"   >Home</NavLink>
        <NavLink to="/about">About</NavLink>
        <NavLink to="/contact">Contact</NavLink>
    </div>
)

export default CSSModules(Header, styles);