import * as React from "react"
import "./index.css"
import hslogo from "../images/handsomesailletters.svg"

const Home = () => {
  return (
    <div className="home">
      <div className="container">
        <img className="cover" src={hslogo}></img>
        <div className="menu">
          <a href="/figma">Leaving Figma</a>
          <a href="/2020" className="old">
            2020
          </a>
          <a href="/2017" className="old">
            2017
          </a>
        </div>
      </div>
    </div>
  )
}

export default Home
