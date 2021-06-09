import * as React from "react"
import Header from "./header"
import "../styles/main.scss"

const Layout = ({ children }) => {
  return (
    <>
      <Header />
      <main className="container">{children}</main>
    </>
  )
}

export default Layout
