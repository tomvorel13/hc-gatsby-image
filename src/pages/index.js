import * as React from "react"
import { graphql } from "gatsby"

// Local
import Layout from "../components/layout"
import Seo from "../components/seo"
import "../styles/main.scss"

const Index = ({ data }) => {
  const images = data.kontentItemGallery.elements.images.value
	
  return (
    <>
      <Seo title="Raw Images Gallery" />
      <Layout>
        {images.map(image => {
          return (
            <div className="image">
              <img
                src={image.elements.file.value[0]?.url}
                alt={image.elements.file.value[0]?.description}
              />
            </div>
          )
        })}
      </Layout>
    </>
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
