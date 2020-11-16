import React from "react"
import Player from 'react-h5-audio-player'
import 'react-h5-audio-player/lib/styles.css';

import Layout from "../components/layout"
import SEO from "../components/seo"

import { graphql } from 'gatsby'

import Table from 'react-bootstrap/Table'
import 'bootstrap/dist/css/bootstrap.min.css';
import '../components/audioplayer.css';

export default function AudioPlayer({ data }) {
  // data = Array.from(data)
  console.log(data)

  return (
    <Layout>
      <SEO title="Audio Player" />

      <br />
      <h3 className="playlist_title">Playlist Name</h3>
      <h5 className="track_title">Track Name</h5>
      <br />

      <div style={{ marginBottom: `1.45rem` }}>
        <Player 
          src="https://www.soundhelix.com/examples/mp3/SoundHelix-Song-13.mp3" 
          showSkipControls={true}
          customAdditionalControls={[]}
        />
      </div>
      
      <br />

      <Table striped bordered hover>
        {data.swapi.allSpecies.edges.map(({ node }) => (
          <tbody>
              <tr key={node.id}>
                <th>{node.name}</th>
              </tr>
              {node.personConnection.people.map(({ name, id }) => (
                <tr key={id}>
                  <td>{name}</td>
                </tr>
              ))}
          </tbody>
        ))} 
      </Table>

    </Layout>
  );
}

export const query = graphql`
  query MyQuery {
    swapi {
      allSpecies {
        edges {
          node {
            name
            id
            personConnection {
              people {
                name
                id
              }
            }
          }
        }
      }
    }
  }
`