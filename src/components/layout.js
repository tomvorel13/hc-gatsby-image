import * as React from "react"
import Masonry from "react-masonry-css"
import Header from "./header"
import "../styles/main.scss"

const Layout = ({ children }) => {
  const breakpointColumnsObj = {
    default: 4,
    1400: 3,
    770: 2,
    500: 1,
  }

  return (
    <>
      <Header />

      <main className="container">
        <Masonry
          breakpointCols={breakpointColumnsObj}
          className="my-masonry-grid"
          columnClassName="my-masonry-grid_column"
        >
          {children}
        </Masonry>
      </main>
    </>
  )
}

export default Layout
