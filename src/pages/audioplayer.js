import React, { useState } from 'react';
import Player from 'react-h5-audio-player';
import 'react-h5-audio-player/lib/styles.css';

import Layout from "../components/layout";
import SEO from "../components/seo";

import { graphql } from 'gatsby';

import Table from 'react-bootstrap/Table';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../components/audioplayer.css';

export default function AudioPlayer({ data }) {

  // get all initial values
  var firstTopic = data.audiopedia.allTopics[0];
  var firstPlaylist = firstTopic.playlists[0];
  var firstTrack = firstPlaylist.tracks[0];

  // create and set state
  const [url, setUrl] = useState(firstTrack.audioURL);
  const [playlistTitle, setPlaylistTitle] = useState(firstPlaylist.title);
  const [trackTitle, setTrackTitle] = useState(firstTrack.title);

  // indices for currently playing topic, playlist, and track
  const [topicIndex, setTopicIndex] = useState(0);
  const [playlistIndex, setPlaylistIndex] = useState(0);
  const [trackIndex, setTrackIndex] = useState(0);

  // list of playlists in current topic & tracks in current playlist
  const [currentPlaylist, setCurrentPlaylists] = useState(data.audiopedia.allTopics[topicIndex].playlists);
  const [currentTracks, setCurrentTracks] = useState(currentPlaylist[playlistIndex].tracks);

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
      if (playlistIndex >= currentPlaylist.length) {
        setTopicIndex(topicIndex + 1);
        setPlaylistIndex(0);
        setTrackIndex(0);
      //else move to new playlist
      } else {
        setPlaylistIndex(playlistIndex + 1);
        setTrackIndex(0);
      }
    // if not last track, increment track index
    } else {
      setTrackIndex(trackIndex + 1);
    }

    // get new track
    const newTrack = currentTracks.find(e => e.index === trackIndex);
    setUrl(newTrack.url); 
    setTrackTitle(newTrack.title);
    setPlaylistTitle(data.audiopedia.allTopics[topicIndex].playlists[playlistIndex].title); 
  }

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
        {data.audiopedia.allTopics.map(({ id, title, index, playlists }) => (
          <tbody>
              <tr key={id}>
                <th>{title}</th>
              </tr>
              {playlists.map((playlist) => (
                <tr key={playlist.id}>
                  {playlist.tracks.map((track) => (
                    <button key={track.id} onClick={() => setAll(track.url, track.title, track.index, playlist.title, playlist.index, index)}>
                      <span style={{fontWeight: 'bold'}}>{playlist.title}</span> - {track.title}
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
  query AudioPlayerQuery {
    audiopedia {
      allTopics{
        id
        title
        index
        audioUrl
        active
        published
        playlists {
          id
          title
          index
          audioUrl
          active
          published
          tracks {
            id
            title
            index
            audioUrl
            transcript
            duration
            createdAt
            updatedAt
            active
            published
          }
        }
      }
    }
    audiopedia {
      allTracks{
        id
        title
        index
        audioUrl
        transcript
        duration
        createdAt
        updatedAt
        active
        published
      }
    }
  }
`