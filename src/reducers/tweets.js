import { RECEIVE_TWEETS } from "../actions/tweets"

//  Set default state to an empty object
//  and takes an action
export default function tweets(state = {}, action) {
  switch (action.type) {
    case RECEIVE_TWEETS:
      return {
        ...state,
        ...action.tweets
      }
    default:
      return state
  }
}
