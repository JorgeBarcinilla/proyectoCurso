import { createFeatureSelector, createSelector } from "@ngrx/store";
import { usersAdapter } from "../entities/users.entity";
import { IUsersState } from "../states/users.state";

const usersAdapterSelectors = usersAdapter.getSelectors()

const selectUsersState = createFeatureSelector<IUsersState>('users');
const selectGetUsers = createSelector(selectUsersState, usersAdapterSelectors.selectAll);
const selectGetUsersLoading = createSelector(selectUsersState, (state)=>state.loading);
const selectGetUsersLoaded= createSelector(selectUsersState, (state)=>state.loaded);

export const USERS_SELECTORS = {
  selectGetUsers,
  selectGetUsersLoading,
  selectGetUsersLoaded
}