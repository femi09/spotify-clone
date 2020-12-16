import React, { useEffect } from "react";
import Player from "./Player";
import Login from "./Login";
import { getTokenFromResponse } from "./spotify";
import { useStateProviderValue } from "./StateProvider";
import SpotifyWebApi from "spotify-web-api-js";
import "./App.css";

const spotify = new SpotifyWebApi();

function App() {
  const [{ user, token }, dispatch] = useStateProviderValue();

  useEffect(() => {
    const hash = getTokenFromResponse();
    window.location.hash = "";
    const _token = hash.access_token;

    if (_token) {
      dispatch({ type: "SET_TOKEN", token: _token });
    }

    spotify.setAccessToken(_token);

    const getMe = async () => {
      try {
        const user = await spotify.getMe();
        dispatch({ type: "SET_USER", user });
      } catch (error) {
        console.log(error);
      }
    };

    const getPlayLists = async () => {
      try {
        const playlists = await spotify.getUserPlaylists();
        dispatch({ type: "SET_PLAYLISTS", playlists: playlists });
      } catch (error) {
        console.log(error);
      }
    };

    const getDiscoverWeekly = async () => {
      try {
        const discover_weekly = await spotify.getPlaylist(
          "37i9dQZEVXcIJazRV9ISoM"
        );
        dispatch({ type: "SET_DISCOVER_WEEKLY", discover_weekly });
      } catch (error) {
        console.log(error);
      }
    };

    getMe();
    getPlayLists();
    getDiscoverWeekly();
  }, [dispatch]);

  return (
    <div className="app">
      {token ? <Player spotify={spotify} /> : <Login />}
    </div>
  );
}

export default App;
