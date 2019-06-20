import { combineReducers } from "redux"
import authedUser from "./authedUser"
import users from "./users"
import tweets from "./tweets"
import { loadingBarReducer } from "react-redux-loading"

//  Combine all reducers into a main root reducer
export default combineReducers({
  authedUser,
  tweets,
  users,
  loadingBar: loadingBarReducer
})
