import { createAction, props } from "@ngrx/store";
import { User } from "src/app/models/user.model";

export const LOGIN_ACTIONS = {
  Login: {
    run: createAction('[Login] iniciar sesión', props<{user: string, password: string}>()),
    success: createAction('[Login] iniciar sesión success', props<{user:User, token: string}>()),
    failed: createAction('[Login] iniciar sesión failed',  props<{error: Error}>())
  }
}