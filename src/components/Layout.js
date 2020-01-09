import React from "react"
import Header from "../components/Header"
import Footer from "../components/Footer"
import LayoutStyles from "../styles/Layout.module.css"

const Layout = props => {
  return (
    <div className={LayoutStyles.container}>
      <div className={LayoutStyles.content}>
        <Header />
        {props.children}
      </div>
      <Footer />
    </div>
  )
}

export default Layout
