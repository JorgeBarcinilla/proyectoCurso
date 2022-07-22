import { createFeatureSelector, createSelector } from "@ngrx/store";
import { IAuthState } from "../states/auth.state";
const selectAuthState = createFeatureSelector<IAuthState>('auth');
const selectGetUser = createSelector(selectAuthState, (state) => state.user);
const selectGetAuthLoading = createSelector(selectAuthState, (state)=>state.loading);

export const AUTH_SELECTORS = {
  selectGetUser,
  selectGetAuthLoading
}