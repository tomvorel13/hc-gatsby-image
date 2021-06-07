import React from "react"
import { graphql } from "gatsby"
import { ImageElement } from "@kentico/gatsby-kontent-components"

// Local
import Layout from "../components/layout"
import "../styles/main.scss"

const Optimized = ({ data }) => {
  const images = data.kontentItemGallery.elements.images.value

  return (
    <Layout>
      {images.map(image => {
        return (
          <div className="image">
            <ImageElement
              image={image.elements.file.value[0]}
              width={image.elements.file.value[0]?.width}
              height={image.elements.file.value[0]?.height}
              alt={image.elements.file.value[0]?.description}
							backgroundColor="#f4f4f4"
            />
            <span>{image.elements.file.value[0]?.description}</span>
          </div>
        )
      })}
    </Layout>
  )
}

export const query = graphql`
  query OptimizedPageQuery {
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

export default Optimized
