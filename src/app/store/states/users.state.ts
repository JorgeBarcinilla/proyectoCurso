import { User } from "src/app/models/user.model";

export interface IUsersState{
  users: User[],
  selectedUser: User | null,
  loading: boolean,
  loaded: boolean,
  error: Error | null
}

export const initialUsersState: IUsersState = {
  error: null,
  loaded: false,
  loading: false,
  selectedUser: null,
  users: []
}