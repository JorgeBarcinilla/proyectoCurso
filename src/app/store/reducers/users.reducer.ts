import { createReducer, on } from "@ngrx/store"
import { USERS_ACTIONS } from "../actions/users.actions"
import { initialUsersState } from "../states/users.state"

export const usersReducer = createReducer(
  initialUsersState,
  on(USERS_ACTIONS.load.run, (state) => {
    return {
      ...state,
      loading: true
    }
  }),
  on(USERS_ACTIONS.load.success, (state, {users}) => {
    return {
      ...state,
      loading: false,
      loaded: true,
      users,
    }
  }),
  on(USERS_ACTIONS.load.failed, (state) => {
    return {
      ...state,
      loading: false,
    }
  })
)
