import * as React from "react"
import { graphql } from "gatsby"

// Local
import Layout from "../components/layout"
import "../styles/main.scss"

const Index = ({ data }) => {
  const images = data.kontentItemGallery.elements.images.value
	
  return (
    <Layout>
      {images.map((item, index) => {
        return (
          <div key={index} className="mountain">
            <div className="mountain__image">
              <img
                src={item.elements.file.value[0]?.url}
                alt={item.elements.file.value[0]?.description}
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
