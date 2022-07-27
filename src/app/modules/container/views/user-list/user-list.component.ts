import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { MatTableDataSource } from '@angular/material/table';
import { ActivatedRoute, Router } from '@angular/router';
import { debounceTime, map, Observable, Subscription, tap } from 'rxjs';
import { User } from 'src/app/models/user.model';
import { UserService } from 'src/app/services/user.service';
import { UsersFacade } from 'src/app/store/facades/users.facade';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.scss'],
  //changeDetection: ChangeDetectionStrategy.OnPush
})
export class UserListComponent implements OnInit {

  inputBusqueda = new FormControl();

  textFromOtherComponent: string | null = null

  displayedColumnsTable = ['index', 'firstName', 'lastName', 'email' ,'country', 'action']
  tableDataSource$ = this.usersFacade.getUsers().pipe(map((users) => new MatTableDataSource<User>(users)));

  userSelect$: Observable<User> | null = null

  susbcriptions: Subscription = new Subscription();

  constructor(private userService: UserService, private router: Router, private activatedRoute: ActivatedRoute, private usersFacade: UsersFacade) {

  }

  ngOnDestroy(){
    this.susbcriptions.unsubscribe();
  }

  ngOnInit(): void {
    this.inputBusqueda.valueChanges.pipe(debounceTime(500)).subscribe((nombre: string) => {
      console.log(nombre)
      this.tableDataSource$ = this.userService.getUsers(nombre).pipe(tap((users) => console.log(users)),
                                                            map((users) => new MatTableDataSource<User>(users)));
    })
    this.susbcriptions.add(
      this.activatedRoute.paramMap.subscribe((param) => {
        console.log(param)
        this.textFromOtherComponent = param.get('from')
      })
    )
  }

  loadUsers(){
    this.usersFacade.loadUsers();
  }

  selectUser(id: number){
    this.userSelect$ = this.userService.selectUserById(id)
  }

  deleteUser(id: number){
    this.userService.deleteUserById(id).subscribe((resp) => {
      console.log(resp);
    })
    this.loadUsers();
  }

  updateUser(){

  }

  navigateToForm(userId: number){
    this.router.navigate(['/form/'+userId])
  }
}
