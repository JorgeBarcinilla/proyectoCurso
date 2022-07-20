import { User } from "src/app/models/user.model"

export interface ILoginState {
  user: User | null,
  token: string | null,
  loading: boolean
}

export const initialLoginState: ILoginState = {
  user: null,
  token: null,
  loading: false
}