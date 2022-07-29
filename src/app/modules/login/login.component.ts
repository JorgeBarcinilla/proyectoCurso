import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Store } from '@ngrx/store';
import { AUTH_ACTIONS } from 'src/app/store/actions/auth.actions';
import { AUTH_SELECTORS } from 'src/app/store/selectors/auth.selectors';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  user$ = this.store.select(AUTH_SELECTORS.selectGetUser);
  loading$ = this.store.select(AUTH_SELECTORS.selectGetAuthLoading);
  remember$ = this.store.select(AUTH_SELECTORS.selectGetAuthRemember);

  formLogin = new FormGroup({
    user: new FormControl(null, Validators.required),
    password: new FormControl(null, Validators.required),
    remember: new FormControl(false, Validators.required)
  })

  constructor(private store: Store) { }

  ngOnInit(): void {
  }

  login(){
    this.store.dispatch(AUTH_ACTIONS.Login.run({
      user: this.formLogin.value.user,
      password: this.formLogin.value.password,
      remember: this.formLogin.value.remember,
    }))
  }
}
