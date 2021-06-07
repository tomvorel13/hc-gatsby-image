import { graphql } from "gatsby"

export const query = graphql`
  fragment Image on kontent_item_image {
    id
    elements {
      file {
        value {
          url
          width
          type
          size
          name
          height
          description
        }
      }
    }
  }
`
