import React, { useEffect } from "react";
import SpotifyWebApi from "spotify-web-api-js";
import { useDataLayerValue } from "./DataLayer";
import Player from "./Player";
import { getTokenFromResponse } from "./spotify";
import "./App.css";
import Login from "./Login";

const spotify = new SpotifyWebApi();

function App() {
  const [{ user, token }, dispatch] = useDataLayerValue();

  useEffect(() => {
    // Set token
    const hash = getTokenFromResponse();
    window.location.hash = "";
    let _token = hash.access_token;

    if (_token) {
      dispatch({
        type: "SET_TOKEN",
        token: _token,
      });

      spotify.setAccessToken(_token);
      spotify.getMe().then((user) => {
        dispatch({
          type: "SET_USER",
          user: user,
        });
      });

      spotify.getUserPlaylists().then((playlists) => {
        dispatch({
          type: "SET_PLAYLISTS",
          playlists: playlists,
        });
      });
    }

    //   s.getPlaylist("37i9dQZEVXcJZyENOWUFo7").then((response) =>
    //     dispatch({
    //       type: "SET_DISCOVER_WEEKLY",
    //       discover_weekly: response,
    //     })
    //   );

    //   s.getMyTopArtists().then((response) =>
    //     dispatch({
    //       type: "SET_TOP_ARTISTS",
    //       top_artists: response,
    //     })
    //   );

    //   dispatch({
    //     type: "SET_SPOTIFY",
    //     spotify: s,
    //   });

    //   s.getMe().then((user) => {
    //     dispatch({
    //       type: "SET_USER",
    //       user,
    //     });
    //   });
  }, []); //token, dispatch

  return <div className="app">{token ? <Player spotify={spotify} /> : <Login />}</div>;
}

export default App;
