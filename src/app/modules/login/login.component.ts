import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Store } from '@ngrx/store';
import { LOGIN_ACTIONS } from 'src/app/store/actions/login.actions';
import { LOGIN_SELECTORS } from 'src/app/store/selectors/login.selectors';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  user$ = this.store.select(LOGIN_SELECTORS.selectGetUser)

  formLogin = new FormGroup({
    user: new FormControl(null, Validators.required),
    password: new FormControl(null, Validators.required)
  })

  constructor(private store: Store) { }

  ngOnInit(): void {
  }

  login(){
    this.store.dispatch(LOGIN_ACTIONS.Login.run({
      user: this.formLogin.value.user,
      password: this.formLogin.value.password,
    }))
  }
}
