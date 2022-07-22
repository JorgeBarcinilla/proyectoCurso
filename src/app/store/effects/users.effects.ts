import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { map, mergeMap } from 'rxjs';
import { UserService } from 'src/app/services/user.service';
import { USERS_ACTIONS } from '../actions/users.actions';

@Injectable({providedIn: 'root'})
export class UsersEffects {
  constructor(private actions$: Actions, private userService:UserService){ }

  loginEffets$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(USERS_ACTIONS.load.run),
      mergeMap((_) => {
        return this.userService.getUsers().pipe(
          map((users) => {
            return USERS_ACTIONS.load.success({users});
          })
        )
      })
    )
  })

}