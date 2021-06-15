import * as React from "react"
import { Link, useStaticQuery, graphql } from "gatsby"

const Header = () => {
  const data = useStaticQuery(graphql`
    query HeaderQuery {
      kontentItemNavigation {
        elements {
          items {
            value {
              ...NavigationItem
            }
          }
        }
      }
    }
  `)

  const menuItems = data.kontentItemNavigation.elements.items.value

  return (
    <header>
      {menuItems.map((item, index) => {
        return (
          <Link
            key={index}
            to={item.elements.url.value}
            activeClassName="active"
          >
            {item.elements.text.value}
          </Link>
        )
      })}
    </header>
  )
}

export default Header
