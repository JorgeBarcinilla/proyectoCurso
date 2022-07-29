import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { map, mergeMap } from 'rxjs';
import { UserService } from 'src/app/services/user.service';
import { AUTH_ACTIONS } from '../actions/auth.actions';
import { emptyAction } from '../app.reducer';

@Injectable({providedIn: 'root'})
export class AuthEffects {
  constructor(private actions$: Actions, private userService:UserService, private router: Router) { }

  loginEffets$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(AUTH_ACTIONS.Login.run),
      mergeMap((action) => {
        return this.userService.login(action.user, action.password).pipe(
          map((user) => {
            return user ? AUTH_ACTIONS.Login.success({token: user.token, user, remember: action.remember}) : emptyAction()
          })
        )
      })
    )
  })

  loginSuccessEffets$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(AUTH_ACTIONS.Login.success),
      map(({token, remember}) => {
        console.log('login success effects')
        localStorage.setItem('token', token)
        localStorage.setItem('remenber', remember+'')
        this.router.navigate(['/'])
        return emptyAction()
      })
    )
  })

  logoutEffets$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(AUTH_ACTIONS.Logout.run),
      map((_) => {
        localStorage.removeItem('token')
        this.router.navigate(['/login'])
        return emptyAction()
      })
    )
  })
}