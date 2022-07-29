import { User } from "src/app/models/user.model"

export interface IAuthState {
  user: User | null,
  token: string | null,
  remember: boolean,
  loading: boolean
}

export const initialAuthState: IAuthState = {
  user: null,
  token: null,
  loading: false,
  remember: localStorage.getItem('remember') ? true : false
}