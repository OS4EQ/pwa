import React from "react"
import Player from 'react-h5-audio-player'
import 'react-h5-audio-player/lib/styles.css';

import Layout from "../components/layout"
import SEO from "../components/seo"

const AudioPlayer = () => (
  <Layout>
    <SEO title="Audio Player" />
    <h1>Audio Player</h1>
    <p>This is where user will see topics, playlists, and tracks for a certain language.</p>
    <div style={{ marginBottom: `1.45rem` }}>
      <Player 
        src="http://example.com/audio.mp3" 
        showSkipControls={true}
        customAdditionalControls={[]}
        header="Now playing: Cleanliness"
      />
    </div>
  </Layout>
);

export default AudioPlayer
