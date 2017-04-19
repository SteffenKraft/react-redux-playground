import React from 'react'
import CSSModules from 'react-css-modules'

import Header from '../components/header'
import Footer from '../components/footer'

import styles from './index.scss'

const Layout = (props) => (
  <div styleName="wrapper">
    <Header />
    {props.children}
    <Footer />
  </div>
)

export default CSSModules(Layout, styles)