import { combineReducers } from "redux";
import series from "./series";
import singleSeries from "./singleSeries"
import episode from "./episode"
import about from "./about"

const thiccReducer = combineReducers({
  // series,
  // singleSeries,
  // episode,
  about
});

export default thiccReducer;