import React from 'react'
import { NavLink } from 'react-router-dom'
import CSSModules from 'react-css-modules'

import styles from './index.scss'

const Header = () => (
    <div styleName="wrapper">
        <NavLink styleName="link" exact to="/">Home</NavLink>
        <NavLink styleName="link" to="/about">About</NavLink>
        <NavLink styleName="link" to="/contact">Contact</NavLink>
    </div>
)

export default CSSModules(Header, styles)