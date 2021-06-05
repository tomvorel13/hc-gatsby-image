import { graphql } from "gatsby"

export const query = graphql`
  fragment NavigationItem on kontent_item_navigation_item {
    id
    elements {
      text {
        value
      }
      url {
        value
      }
    }
  }
`
