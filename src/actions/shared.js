import { getInitialData } from "../utils/api"
import { receiveUsers } from "../actions/users"
import { receiveTweets } from "../actions/tweets"
import { setAuthedUser } from "../actions/authUser"

const AUTHED_ID = "dan_abramov"

// Uses the redux-thunk pattern.
// Makes an async request.
export function handleInitialData() {
  return dispatch => {
    return getInitialData().then(({ users, tweets }) => {
      // Adding tweets and users to the Redux Store
      dispatch(receiveUsers(users))
      dispatch(receiveTweets(tweets))
      dispatch(setAuthedUser(AUTHED_ID))
    })
  }
}
