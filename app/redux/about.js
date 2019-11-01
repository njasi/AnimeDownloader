import axios from "axios";

const LOADED_ABOUT = "LOADED_ABOUT";

export const loadedAbout = about => {
  return {
    type: LOADED_ABOUT,
    about
  };
};

export const fetchAbout = () => {
  return async dispatch => {
    const { data } = await axios.get("/api/about");
    dispatch(loadedAbout(data));
  };
};

const initialState = "";

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case LOADED_ABOUT: {
      return action.about;
    }
    default:
      return state;
  }
};

export default reducer;
