import React from "react"
import { graphql } from "gatsby"
import Layout from "../../components/layout"
import "../../styles/blog.scss"
import BlogCard from "../../components/blogCard"

const Blog = ({ data }) => {
  const blogPosts = data.posts.nodes
  return (
    <Layout>
      <div className="cards">
        {blogPosts.map(post => (
          <BlogCard
            title={post.elements.title.value}
            perex={post.elements.perex.value}
            image={post.elements.hero_image}
            slug={post.elements.url_slug.value}
          />
        ))}
      </div>
    </Layout>
  )
}

export const query = graphql`
  query BlogQuery {
    posts: allKontentItemBlogPost {
      nodes {
        system {
          id
        }
        elements {
          title {
            value
          }
          perex {
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
          url_slug {
            value
          }
        }
      }
    }
  }
`

export default Blog
