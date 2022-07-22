import { createFeatureSelector, createSelector } from "@ngrx/store";
import { IUsersState } from "../states/users.state";

const selectUsersState = createFeatureSelector<IUsersState>('users');
const selectGetUsers = createSelector(selectUsersState, (state) => state.users);
const selectGetUsersLoading = createSelector(selectUsersState, (state)=>state.loading);
const selectGetUsersLoaded= createSelector(selectUsersState, (state)=>state.loaded);

export const USERS_SELECTORS = {
  selectGetUsers,
  selectGetUsersLoading,
  selectGetUsersLoaded
}