import { createFeatureSelector, createSelector } from "@ngrx/store";
import { ILoginState } from "../states/login.state";
const selectLoginState = createFeatureSelector<ILoginState>('login');
const selectGetUser = createSelector(selectLoginState, (state) => state.user);

export const LOGIN_SELECTORS = {
  selectGetUser
}