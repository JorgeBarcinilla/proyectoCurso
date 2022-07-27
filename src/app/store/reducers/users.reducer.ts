import { createReducer, on } from "@ngrx/store"
import { USERS_ACTIONS } from "../actions/users.actions"
import { usersAdapter } from "../entities/users.entity"
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
    const newState = usersAdapter.removeAll({...state})
    return usersAdapter.addMany(users, {...newState, loading: false})
  }),
  on(USERS_ACTIONS.load.failed, (state) => {
    return {
      ...state,
      loading: false,
    }
  })
)
