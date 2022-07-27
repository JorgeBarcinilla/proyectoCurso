import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import { USERS_ACTIONS } from '../actions/users.actions';
import { USERS_SELECTORS } from '../selectors/users.selectors';

@Injectable({providedIn: 'root'})
export class UsersFacade {

  constructor( private store: Store) { }

  loadUsers(){
    this.store.dispatch(USERS_ACTIONS.load.run({}))
  }

  getUsers = () => this.store.select(USERS_SELECTORS.selectGetUsers);

}