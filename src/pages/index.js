import * as React from "react"
import { graphql } from "gatsby"

// Local
import Layout from "../components/layout"
import "../styles/main.scss"

const Index = ({ data }) => {
  const images = data.kontentItemGallery.elements.images.value
  // console.log(data)
  return (
    <Layout>
      {images.map(image => {
        return (
          <div className="image">
            <img
              src={image.elements.file.value[0]?.url}
              alt={image.elements.file.value[0]?.description}
            />
            <span>{image.elements.file.value[0]?.description}</span>
          </div>
        )
      })}
    </Layout>
  )
}

export const query = graphql`
  query RootPageQuery {
    kontentItemGallery {
      elements {
        images {
          value {
            ...Image
          }
        }
      }
    }
  }
`

export default Index
