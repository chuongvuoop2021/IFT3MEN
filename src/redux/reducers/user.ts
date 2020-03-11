import { UserState, UserActions, LOGIN_USER } from '../../types'

export default function user(
  state: UserState = {
    currentUser: {},
  },
  action: UserActions
): UserState {
  switch (action.type) {
    case LOGIN_USER: {
      return { ...state, currentUser: action.payload.currentUser }
    }
    default:
      return state
  }
}
