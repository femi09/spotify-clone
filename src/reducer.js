export const initialState = {
  // REMOVED AFTER DEVELOPING
  // token:
  //   "BQCnPSaotJ9fMIqn-vpi-94hSDic-k8l-GQW5Vn2fGqKduIEDOffADdDQIaFmfFJJ3ZbYfnQFNt8TxDlfkwCXq0HuBPdonnIIjHlZoBOMXX2m14cACyELMWV4ZMtURyxm1HxPXk1LYBC-oEAKFxTeVOPYyOQpDm2Dx4pMSQYsuYx4sBG",
  user: null,
  playlists: [],
  playing: false,
  item: null,
};

const reducer = (state, action) => {
  console.log(action);
  switch (action.type) {
    case "SET_USER":
      return { ...state, user: action.user };
    case "SET_TOKEN":
      return { ...state, token: action.token };
    case "SET_PLAYLISTS":
      return { ...state, playlists: action.playlists };
    case "SET_DISCOVER_WEEKLY":
      return { ...state, discover_weekly: action.discover_weekly };
    default:
      return state;
  }
};

export default reducer;
