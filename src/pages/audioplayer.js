import React, { useState } from 'react';
import Player from 'react-h5-audio-player';
import 'react-h5-audio-player/lib/styles.css';

import Layout from "../components/layout";
import SEO from "../components/seo";

import { graphql } from 'gatsby';

import Table from 'react-bootstrap/Table';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../components/audioplayer.css';

export default function AudioPlayer({ location, data }) {
  // get langauge
  var language = location.state.language;

  // get all initial values
  var firstPlaylist = data.audiopedia.allTopics.edges[0].node.playlists.edges[0].node;
  var firstTrack = firstPlaylist.tracks.edges[0].node;

  // create and set state
  const [url, setUrl] = useState(firstTrack.audioUrl);
  const [playlistTitle, setPlaylistTitle] = useState(firstPlaylist.title);
  const [trackTitle, setTrackTitle] = useState(firstTrack.title);
  // const [url, setUrl] = useState("https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3");
  // const [playlistTitle, setPlaylistTitle] = useState("Title of playlist");
  // const [trackTitle, setTrackTitle] = useState("Title of track");

  // indices for currently playing topic, playlist, and track
  const [topicIndex, setTopicIndex] = useState(0);
  const [playlistIndex, setPlaylistIndex] = useState(0);
  const [trackIndex, setTrackIndex] = useState(0);

  // list of playlists in current topic 
  const [currentPlaylists, setCurrentPlaylists] = useState(data.audiopedia.allTopics.edges[topicIndex].node.playlists.edges);
  // console.log(currentPlaylists);
  // list of tracks in current playlist
  const [currentTracks, setCurrentTracks] = useState(currentPlaylists[0].node.tracks.edges);

  // on click, update state to selected track
  function setAll(url, track, trackIndex, playlist, playlistIndex, topicIndex) {
    setUrl(url); 
    setTrackTitle(track);
    setTrackIndex(trackIndex);
    setPlaylistTitle(playlist); 
    setPlaylistIndex(playlistIndex);
    setTopicIndex(topicIndex);
  }

  // after audio ends, update state to next track
  function srcChange() {
    // check if reached last track in playlist
    if (trackIndex + 1 >= currentTracks.length) {
      // if reached last playlist in topic, move to new topic
      if (playlistIndex >= currentPlaylists.length) {
        setTopicIndex(topicIndex + 1);
        setPlaylistIndex(0);
        setTrackIndex(0);
        setCurrentPlaylists(data.audiopedia.allTopics.edges[topicIndex].node.playlists.edges);
        setCurrentTracks(currentPlaylists[playlistIndex].node.tracks.edges);
      //else move to new playlist
      } else {
        setPlaylistIndex(playlistIndex + 1);
        setTrackIndex(0);
        setCurrentTracks(currentPlaylists[playlistIndex].node.tracks.edges);
      }
    // if not last track, increment track index
    } else {
      setTrackIndex(trackIndex + 1);
    }

    // get new track
    const newTrack = currentTracks.find(e => e.index === trackIndex);
    setUrl(newTrack.url); 
    setTrackTitle(newTrack.title);
    setPlaylistTitle(data.audiopedia.allTopics.edges[topicIndex].playlists.edges[playlistIndex].title); 
  }

  console.log(data.audiopedia.allTopics.edges);

  return (
    <Layout>
      <SEO title="Audio Player" />

      <br />

      {/* currently playing playlist & track */}
      <h3 className="playlist_title">{playlistTitle}</h3>
      <h5 className="track_title">{trackTitle}</h5>
      <br />

      {/* audio player */}
      <div style={{ marginBottom: `1.45rem` }}>
        <Player 
          autoplay={true}
          autoPlayAfterSrcChange={true}
          src={url}
          showSkipControls={true}
          customAdditionalControls={[]}
          onEnded={() => srcChange()}
        />
      </div>

      <br />

      {/* table of tracks */}
      <Table striped bordered hover>
        {data.audiopedia.allTopics.edges.map(({ node }) => (
          <tbody>
              <tr key={node.id}>
                <th>{node.title}</th>
              </tr>
              {node.playlists.edges.map((playlist) => (
                <tr key={playlist.node.id}>
                  {playlist.node.tracks.edges.map((track) => (
                    <button key={track.node.id} onClick={() => setAll(track.node.audioUrl, track.node.title, track.node.index, playlist.node.title, playlist.node.index, node.index)}>
                      <span style={{fontWeight: 'bold'}}>{playlist.node.title}</span> - {track.node.title}
                    </button>
                  ))}
                </tr>
              ))}
          </tbody>
        ))} 
      </Table>

    </Layout>
  );
}

export const query = graphql`
  query AudioPlayerQuery ($language: ID) {
    audiopedia {
      allTopics (active: true, published: true, languageId: $language) {
        edges {
          node {
            id
            title
            index
            playlists (active: true, published: true) {
              edges {
                node {
                  id
                  title
                  index
                  tracks {
                    edges {
                      node {
                        id
                        title
                        index
                        audioUrl
                        active
                        published
                      }
                    }
                  }
                }
              }
            }
          }
        }
      }
    }
  }
`