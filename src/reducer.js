// import { findAllByDisplayValue } from "@testing-library/react";

export const initialState = {
  user: null,
  playlists: [],
  spotify: null,
  discover_weekly: null,
  top_artists: null,
  playing: false,
  item: null,
  // remove after finished developing
  // token:
  //   "BQBCKp6UmmqRnIWvWLlKrRqwr-RaHcGR0OWLGP5Rd05n0Lzux-ZFfPiXffIGZ4hYthU12CwynnBY65x7YiCOmUHcHtfCNElwIcHCeeDIDg3bo4E0uCH7-NvE2fohGgKN9zfm_cQ-E2GGYe2jbhhtSBqxzF9MVbgQsA",
};

const reducer = (state, action) => {
  // console.log(action);
  switch (action.type) {
    case "SET_TOKEN":
      return {
        ...state,
        token: action.token,
      };

    case "SET_USER":
      return {
        ...state,
        user: action.user,
      };

    case "SET_PLAYLISTS":
      return {
        ...state,
        playlists: action.playlists,
      };

    case "SET_DISCOVER_WEEKLY":
      return {
        ...state,
        discover_weekly: action.discover_weekly,
      };

    case "SET_PLAYING":
      return {
        ...state,
        playing: action.playing,
      };

    case "SET_ITEM":
      return {
        ...state,
        item: action.item,
      };

    case "SET_TOP_ARTISTS":
      return {
        ...state,
        top_artists: action.top_artists,
      };

    case "SET_SPOTIFY":
      return {
        ...state,
        spotify: action.spotify,
      };

    default:
      return state;
  }
};

export default reducer;
