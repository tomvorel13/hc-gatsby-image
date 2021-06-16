import { graphql } from "gatsby"

export const query = graphql`
  fragment TextCode on kontent_item_text_component___code {
    id
    elements {
      code {
        value
      }
      language {
        value {
          codename
        }
      }
    }
    system {
      type
      codename
    }
  }
`
