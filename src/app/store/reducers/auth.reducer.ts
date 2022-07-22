import { createReducer, on } from "@ngrx/store";
import { AUTH_ACTIONS } from "../actions/auth.actions";
import { initialAuthState } from "../states/auth.state";

export const authReducer = createReducer(
  initialAuthState,
  on(AUTH_ACTIONS.Login.run, (state) => {
    return {
      ...state,
      loading: true
    }
  }),
  on(AUTH_ACTIONS.Login.success, (state, {user, token}) => {
    return {
      ...state,
      loading: false,
      user,
      token
    }
  }),
  on(AUTH_ACTIONS.Login.failed, (state) => {
    return {
      ...state,
      loading: false,
    }
  }),
  on(AUTH_ACTIONS.Logout.run, (state) => {
    return {
      ...state,
      token: null,
      user: null
    }
  }),
)