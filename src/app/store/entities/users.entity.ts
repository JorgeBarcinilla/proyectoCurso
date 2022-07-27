import { createEntityAdapter } from "@ngrx/entity";
import { User } from "src/app/models/user.model";

export const usersAdapter = createEntityAdapter<User>({})