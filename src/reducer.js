export const initialState = {
  user: null,
  playlists: [],
  playing: false,
  top_artists: null,
  discover_weekly: null,
  item: null,
  // token:
  //   "BQCckMMRGQDEZQwvAqjBoQPDSC1VWPsb9I_orRhyx1EvBc2w3DHcWrExcW8c4XKxS5nRpSrBdilGddIc3HN-VkWihry0TBzMDMoUxm2dA1ZszgkEIcSxPX1p_Twm3lT9SvxATFtYboFmFKYsPmGC4p-5MKnZMsB3rHgrPqxU1Qhk1FyS1cwanWBx6Cue6E0W2AF5oBKrFlI3huWb",
};

const reducer = (state, action) => {
  console.log(action);

  switch (action.type) {
    case "SET_USER":
      return {
        ...state,
        user: action.user,
      };

    case "SET_PLAYING":
      return {
        ...state,
        playing: action.playing,
      };

    case "SET_TOKEN":
      return {
        ...state,
        token: action.token,
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
    default:
      return state;
  }
};

export default reducer;
