import React from "react"
import { graphql, Link } from "gatsby"
import {
  ImageElement,
  RichTextElement,
} from "@kentico/gatsby-kontent-components"
import Image from "../../components/richtext/Image"
import Code from "../../components/richtext/Code"
import Layout from "../../components/layout"
import "../../styles/blog.scss"

const BlogPost = ({ data }) => {
  const post = data.post.edges[0]?.node.elements

  return (
    <Layout>
      <div className="post__image">
        <ImageElement
          width={1440}
          height={500}
          image={post.hero_image.value[0]}
          alt={post.hero_image.value[0]?.description}
          backgroundColor="#f4f4f4"
          options={{
            fit: "crop",
          }}
        />
      </div>
      <div className="post__body">
        <h1 className="post__title">{post.title.value}</h1>

        <RichTextElement
          value={post.body.value}
          images={post.body.images}
          links={post.body.links}
          linkedItems={post.body.modular_content}
          resolveImage={image => {
            return (
              <ImageElement
                image={image}
                alt={image.description ? image.description : image.name}
                width={800}
              />
            )
          }}
          resolveLinkedItem={linkedItem => {
            if (!linkedItem) return null

            switch (linkedItem.system.type) {
              case "text_component___image":
                return <Image elements={linkedItem.elements} />
              case "text_component___code":
                return <Code elements={linkedItem.elements} />
              default:
                return null
            }
          }}
          resolveLink={(link, domNode) => {
            const type = link.type

            switch (type) {
              case "blog_post":
                return (
                  <Link to={`/blog/${link.url_slug}`}>
                    {domNode.children[0].data}
                  </Link>
                )

              default:
                return (
                  <Link to={`/${link.url_slug}`}>
                    {domNode.children[0].data}
                  </Link>
                )
            }
          }}
          resolveDomNode={(domNode, domToReact) => {
            if (domNode.name === "table") {
              // For options - check https://www.npmjs.com/package/html-react-parser#options
              return (
                <div className="table-responsive">{domToReact([domNode])}</div>
              )
            }
          }}
        />
      </div>
    </Layout>
  )
}

export const query = graphql`
  query($id: String!) {
    post: allKontentItemBlogPost(filter: { id: { eq: $id } }) {
      edges {
        node {
          elements {
            title {
              value
            }
            hero_image {
              value {
                description
                height
                url
                width
                name
                size
                type
              }
            }
            body {
              value
              links {
                codename
                link_id
                type
                url_slug
              }
              images {
                description
                image_id
                height
                url
                width
              }
              modular_content {
                ...TextImage
                ...TextCode
              }
            }
          }
          system {
            id
          }
        }
      }
    }
  }
`

export default BlogPost
