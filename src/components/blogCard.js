import React from "react"
import { Link } from "gatsby"
import { ImageElement } from "@kentico/gatsby-kontent-components/dist/image-element"
import "../styles/blog.scss"

const BlogCard = ({ title, perex, image, slug }) => {
  return (
    <div className="card">
      <div className="card__image">
        <ImageElement
          width={550}
          height={200}
          image={image.value[0]}
          alt={image.value[0]?.description}
          backgroundColor="#f4f4f4"
          options={{
            fit: "crop",
          }}
        />
      </div>
      <div className="card__body">
        <h3 className="card__title">{title}</h3>
        <p className="card__perex">{perex}</p>
        <Link to={`/blog/${slug}`} className="card__link">
          Read more &rarr;
        </Link>
      </div>
    </div>
  )
}

export default BlogCard
