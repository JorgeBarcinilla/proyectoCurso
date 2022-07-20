import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { map, mergeMap } from 'rxjs';
import { UserService } from 'src/app/services/user.service';
import { LOGIN_ACTIONS } from '../actions/login.actions';

@Injectable({providedIn: 'root'})
export class LoginEffects {
  constructor(private actions$: Actions, private userService:UserService) { }

  loginEffets$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(LOGIN_ACTIONS.Login.run),
      mergeMap((action) => {
        return this.userService.login(action.user, action.password).pipe(
          map((user) => {
            return LOGIN_ACTIONS.Login.success({token: 'adsjhfskfhkljsdhflksdf', user})
          })
        )
      })
    )
  })
}