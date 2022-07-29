import { createAction, props } from "@ngrx/store";
import { User } from "src/app/models/user.model";

export const AUTH_ACTIONS = {
  Login: {
    run: createAction('[Login] iniciar sesión', props<{user: string, password: string, remember: boolean}>()),
    success: createAction('[Login] iniciar sesión success', props<{user:User, token: string, remember: boolean}>()),
    failed: createAction('[Login] iniciar sesión failed',  props<{error: Error}>())
  },
  Logout:{
    run: createAction('[Logout] cerrar sesión'),
  }
}