import { RECEIVE_USERS } from "../actions/users"

//  Set default state to an empty object
//  and takes an action
export default function users(state = {}, action) {
  switch (action.type) {
    case RECEIVE_USERS:
      return {
        ...state,
        ...action.users
      }
    default:
      return state
  }
}
