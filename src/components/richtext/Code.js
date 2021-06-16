import React from "react"
import { LightAsync as SyntaxHighlighter } from "react-syntax-highlighter"
import js from "react-syntax-highlighter/dist/esm/languages/hljs/javascript"
import python from "react-syntax-highlighter/dist/esm/languages/hljs/python"

// Theme
import vs2015 from "react-syntax-highlighter/dist/esm/styles/hljs/vs2015"

const Code = ({ elements }) => {
  console.log(elements, "els")
  SyntaxHighlighter.registerLanguage("javascript", js)
  SyntaxHighlighter.registerLanguage("python", python)

  // const languages = ["javascript", "python"]

  const customStyles = {
    padding: "24px",
    borderRadius: "15px",
    fontSize: "18px",
    fontFamily: "Source Code Pro, monospace",
  }

  return (
    <SyntaxHighlighter
      showLineNumbers={false}
      language={elements.language.value[0]?.codename}
      customStyle={customStyles}
      style={vs2015}
    >
      {elements.code.value}
    </SyntaxHighlighter>
  )
}

export default Code
