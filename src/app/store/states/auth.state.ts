import { User } from "src/app/models/user.model"

export interface IAuthState {
  user: User | null,
  token: string | null,
  loading: boolean
}

export const initialAuthState: IAuthState = {
  user: null,
  token: null,
  loading: false
}