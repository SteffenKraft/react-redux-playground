import React from 'react'
import { Link } from 'react-router-dom'
import CSSModules from 'react-css-modules'

import styles from './index.scss'

const Footer = () => (
    <div styleName="wrapper">
        <Link styleName="link" to="/">Home</Link> |
        <Link styleName="link" to="/about">About</Link> |
        <Link styleName="link" to="/contact">Contact</Link>
    </div>
)

export default CSSModules(Footer, styles)