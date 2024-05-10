const initialState = {
    canzone: {
      content: [],
    },
  };
  
  const mainReducer = (state = initialState, action) => {
    switch (action.type) {
      case "ADD_SONG":
        return {
          ...state,
          canzone: action.payload,
        };
      default:
        return state;
    }
  };
  export default mainReducer;