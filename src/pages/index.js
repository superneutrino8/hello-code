import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"
import Card from "../components/Card"
import Section from "../components/Section"
import Wave from "../components/Wave"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <div className="Hero">
      <div className="HeroGroup">
        <h1>
          Learn To <br />
          Design and Code React Apps
        </h1>
        <p>
          Complete Course about the best tools and design systems. Prototype and
          built apps with React and Swift.
        </p>
        <Link to="/page-2/">Watch The Video</Link> <br />.
        <div className="logos">
          <img src={require("../images/logo-sketch.png")} width="50" />
          <img src={require("../images/logo-figma.png")} width="50" />
          <img src={require("../images/logo-studio.png")} width="50" />
          <img src={require("../images/logo-framer.png")} width="50" />
          <img src={require("../images/logo-react.png")} width="50" />
          <img src={require("../images/logo-swift.png")} width="50" />
        </div>
        <Wave />
      </div>
      <div className="Cards">
        <h2>11 Courses, more coming</h2>
        <div className="CardGroup">
          <Card
            title="Design System"
            text="10 section"
            image={require("../images/wallpaper.jpg")}
          />
          <Card
            title="React For Developer"
            text="12 section"
            image={require("../images/wallpaper2.jpg")}
          />
          <Card
            title="Sound Design"
            text="5 section"
            image={require("../images/wallpaper3.jpg")}
          />
          <Card
            title="ARKit 2"
            text="10 section"
            image={require("../images/wallpaper.jpg")}
          />
        </div>
      </div>
      <Section
        image={require("../images/wallpaper2.jpg")}
        logo={require("../images/logo-react.png")}
        title="React For Designers"
        text="Learn how to build a modern site using React and the most efficient libraries to get your site/product online. Get familiar with Grid CSS, animations, interactions, dynamic data with Contentful and deploying your site with Netlify."
      />
    </div>
  </Layout>
)

export default IndexPage
