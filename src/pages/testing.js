import React from 'react'

import Layout from "../components/layout"
import SEO from "../components/seo"

import { graphql } from 'gatsby'

const Testing = ({ data }) => {
  return (
    <Layout>
      <SEO title="Testing" />
      <div>
        <h1>Testing Page</h1>
        <p>hello!! my name is paula zhu yeah it is and i like pie🚀</p>
        <b>{'heres a test graphql query from the config file: '+data.site.siteMetadata.description}</b>
      </div>
    </Layout>
  )
}

export default Testing

export const query = graphql`
  query TestingQuery {
    site {
      siteMetadata {
        description
      }
    }
  }
`