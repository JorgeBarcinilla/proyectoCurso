import { EntityState } from "@ngrx/entity";
import { User } from "src/app/models/user.model";
import { usersAdapter } from "../entities/users.entity";

export interface IUsersState extends EntityState<User>{
  selectedUser: User | null,
  loading: boolean,
  loaded: boolean,
  error: Error | null
}

export const initialUsersState: IUsersState = usersAdapter.getInitialState({
  error: null,
  loaded: false,
  loading: false,
  selectedUser: null,
})