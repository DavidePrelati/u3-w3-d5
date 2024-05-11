export const ADD_TO_FAVOURITE = "ADD_TO_FAVOURITE";
export const REMOVE_FROM_FAVOURITE = "REMOVE_FROM_FAVOURITE";
export const GET_SONGS = "GET_SONGS";
export const GET_QUEEN_SONGS = "GET_QUEEN_SONGS";
export const GET_PERRY_SONGS = "GET_PERRY_SONGS";
export const GET_EMINEM_SONGS = "GET_EMINEM_SONGS";

export const addFavouriteAction = (singleSong) => ({
  type: ADD_TO_FAVOURITE,
  payload: singleSong,
});

export const removeFavouriteAction = (singleSong) => ({
  type: REMOVE_FROM_FAVOURITE,
  payload: singleSong,
});

export const myMusicSection = (artistName) => {
  return async (dispatch) => {
    try {
      let response = await fetch("https://striveschool-api.herokuapp.com/api/deezer/search?q=" + artistName);
      if (response.ok) {
        let { data } = await response.json();
        dispatch({
          type: GET_SONGS,
          payload: data,
        });
      } else {
        throw new Error("Error in fetching songs");
      }
    } catch (err) {
      console.log("error", err);
    }
  };
};
export const myMusicSectionQueen = (artistName) => {
  return async (dispatch) => {
    try {
      let response = await fetch("https://striveschool-api.herokuapp.com/api/deezer/search?q=" + artistName);
      if (response.ok) {
        let { data } = await response.json();
        dispatch({
          type: GET_QUEEN_SONGS,
          payload: data,
        });
      } else {
        throw new Error("Error in fetching songs");
      }
    } catch (err) {
      console.log("error", err);
    }
  };
};
export const myMusicSectionPerry = (artistName) => {
  return async (dispatch) => {
    try {
      let response = await fetch("https://striveschool-api.herokuapp.com/api/deezer/search?q=" + artistName);
      if (response.ok) {
        let { data } = await response.json();
        dispatch({
          type: GET_PERRY_SONGS,
          payload: data,
        });
      } else {
        throw new Error("Error in fetching songs");
      }
    } catch (err) {
      console.log("error", err);
    }
  };
};
export const myMusicSectionEminem = (artistName) => {
  return async (dispatch) => {
    try {
      let response = await fetch("https://striveschool-api.herokuapp.com/api/deezer/search?q=" + artistName);
      if (response.ok) {
        let { data } = await response.json();
        dispatch({
          type: GET_EMINEM_SONGS,
          payload: data,
        });
      } else {
        throw new Error("Error in fetching songs");
      }
    } catch (err) {
      console.log("error", err);
    }
  };
};