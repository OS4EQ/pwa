import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <h1>Select Your Language</h1>
    <p>Welcome to the world's most vital audiobook.</p>
    <div style={{ maxWidth: `300px`, marginBottom: `1.45rem` }}>
      <Image />
    </div>
    <Link to="/audioplayer/">Audio Player</Link> <br />
    <Link to="/testing/">Test Page</Link> <br />
  </Layout>
)

export default IndexPage
