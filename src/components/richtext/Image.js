import React from "react"
import { ImageElement } from "@kentico/gatsby-kontent-components"
import "../../styles/richtext.scss"

const Image = ({ elements }) => {
  return (
    <div className="richtext__image">
      <ImageElement
        width={elements.width.value ?? 800}
        height={elements.height.value ?? null}
        image={elements.image.value[0]}
        backgroundColor="#f4f4f4"
        alt={elements.description.value ?? elements.image.value[0]?.description}
      />
      {elements.description.value && <span>{elements.description.value}</span>}
    </div>
  )
}

export default Image
