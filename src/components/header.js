import * as React from "react"
import { Link, useStaticQuery, graphql } from "gatsby"

const Header = () => {
  const data = useStaticQuery(graphql`
    query HeaderQuery {
      allKontentItemNavigationItem {
        nodes {
          elements {
            text {
              value
            }
            url {
              value
            }
          }
        }
      }
    }
  `)

  const menuItems = data.allKontentItemNavigationItem.nodes

  return (
    <header>
      {menuItems.map((item, index) => {
        return (
          <Link key={index} to={item.elements.url.value}>
            {item.elements.text.value}
          </Link>
        )
      })}
    </header>
  )
}

export default Header
