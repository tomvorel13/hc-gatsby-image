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
      {images.map(item => {
        return (
          <div className="mountain">
            <div className="mountain__image">
              <ImageElement
                width={800}
                image={item.elements.file.value[0]}
                alt={item.elements.file.value[0]?.description}
                backgroundColor="#f4f4f4"
                options={{
                  quality: 50,
                }}
              />
            </div>
            <span className="mountain__text">
              {item.elements.file.value[0]?.description}
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
