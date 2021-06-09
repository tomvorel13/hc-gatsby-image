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
          <div className="card">
            <div className="card__image">
              <ImageElement
                image={image.elements.file.value[0]}
                alt={image.elements.file.value[0]?.description}
                backgroundColor="#f4f4f4"
              />
            </div>
            <span className="card__text">
              {image.elements.file.value[0]?.description}
            </span>
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
