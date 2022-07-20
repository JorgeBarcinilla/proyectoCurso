import { createReducer, on } from "@ngrx/store";
import { LOGIN_ACTIONS } from "../actions/login.actions";
import { initialLoginState } from "../states/login.state";

export const loginReducer = createReducer(
  initialLoginState,
  on(LOGIN_ACTIONS.Login.run, (state) => {
    return {
      ...state,
      loading: true
    }
  }),
  on(LOGIN_ACTIONS.Login.success, (state, {user, token}) => {
    return {
      ...state,
      loading: false,
      user,
      token
    }
  }),
  on(LOGIN_ACTIONS.Login.success, (state) => {
    return {
      ...state,
      loading: false,
    }
  })
)