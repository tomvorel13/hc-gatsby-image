import { graphql } from "gatsby"

export const query = graphql`
  fragment TextImage on kontent_item_text_component___image {
    id
    elements {
      description {
        value
      }
      height {
        value
      }
      image {
        value {
          description
          height
          name
          url
          width
          type
          size
        }
      }
      width {
        value
      }
    }
    system {
      type
			codename
    }
  }
`
