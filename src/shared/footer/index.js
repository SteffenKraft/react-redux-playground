import React from 'react'
import { Link } from 'react-router-dom'
import CSSModules from 'react-css-modules'

import styles from './index.scss'

const Footer = () => (
    <div styleName="wrapper">
        <Link styleName="link" to="/">Home</Link>
    </div>
)

export default CSSModules(Footer, styles)