import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
// import Image from "../components/image"
import SEO from "../components/seo"

import Table from 'react-bootstrap/Table'
import 'bootstrap/dist/css/bootstrap.min.css';
import '../components/index.css';

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <h2>Select Your Language</h2>
    <p>Welcome to the world's most vital audiobook.</p>
    {/* <div style={{ maxWidth: `300px`, marginBottom: `1.45rem` }}>
      <Image />
    </div> */}
    <Table striped bordered hover>
        <tbody>
          <tr>
            <td>Kiswahili</td>
          </tr>
          <tr>
            <td>Urdu</td>
          </tr>
          <tr>
            <td>Nepali</td>
          </tr>
          <tr>
            <td>Arabic</td>
          </tr>
          <tr>
            <td>French</td>
          </tr>
          <tr>
            <td>Spanish</td>
          </tr>
          <tr>
            <td>Portuguese</td>
          </tr>
          <tr>
            <td><Link to="/audioplayer/">English</Link></td>
          </tr>
          <tr>
            <td>Indonesian</td>
          </tr>
          <tr>
            <td>Mandarin</td>
          </tr>
        </tbody>
      </Table>
  </Layout>
)

export default IndexPage
