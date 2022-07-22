import { createAction, props } from "@ngrx/store";
import { User } from "src/app/models/user.model";

export const USERS_ACTIONS = {
  load: {
    run: createAction('[Users] cargar usuarios', props<{nombre?: string}>()),
    success: createAction('[Users] cargar usuarios success', props<{users:User[]}>()),
    failed: createAction('[Users] cargar usuarios failed',  props<{error: Error}>())
  }
}