import { ActionReducerMap } from "@ngrx/store";
import { IAppState } from "./app.state";
import { loginReducer } from "./reducers/login.reducer";

export const appReducers: ActionReducerMap<IAppState> = {
  login: loginReducer
}