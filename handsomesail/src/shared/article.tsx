import * as React from "react"
import "./article.css"
import { transformText } from "./lib"

const Article = (props: {title: string, sections: Array<{title: string, content: string}>}) => {
  return (
    <div className="main">
      <div className="header">
        {props.title}
      </div>
      <div className="content">
        {
          props.sections.map((sec, i) => (
            <div key={i} className="section">
              {sec.title && <div className="sectionTitle">{sec.title}</div>}
              {sec.content && <div className="sectionContent">{transformText(sec.content)}</div>}
            </div>
          ))
        }
      </div>
      <div className="footer">
        <a href="/">Home</a>
      </div>
    </div>
  )
}

export default Article
