import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <div className="Hero">
      <div className="HeroGroup">
        <h1>Learn To Design and Code React Apps</h1>
        <p>
          Complete Course about the best tools and design systems. Prototype and
          built apps with React and Swift.
        </p>
        <Link to="/page-2/">Watch The Video</Link> <br />
      </div>
    </div>
  </Layout>
)

export default IndexPage
