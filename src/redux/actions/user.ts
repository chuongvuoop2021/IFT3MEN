import { LOGIN_USER, UserActions, CurrentUser } from '../../types'

export function loginUser(currentUser: CurrentUser): UserActions {
  return {
    type: LOGIN_USER,
    payload: {
      currentUser,
    },
  }
}
