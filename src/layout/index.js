import React from 'react'
import Header from '../components/header'
import Footer from '../components/footer'

const Layout = (props) => (
  <div style={{ border: '1px solid red' }}>
    <Header />
    {props.children}
    <Footer />
  </div>
)

export default Layout