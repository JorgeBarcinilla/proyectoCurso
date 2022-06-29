import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { map, Observable, Subscription, tap } from 'rxjs';
import { User } from 'src/app/models/user.model';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class UserListComponent implements OnInit {

  displayedColumnsTable = ['index', 'firstName', 'lastName', 'email' ,'country', 'action']
  tableDataSource$: Observable<MatTableDataSource<User>>;

  userSelect: User | null = null;

  susbcriptions: Subscription = new Subscription();

  constructor(private userService: UserService) {
    this.tableDataSource$ = this.userService.getUsers().pipe(tap((users) => console.log(users)),
                                                            map((users) => new MatTableDataSource<User>(users)));
  }

  ngOnDestroy(){
    this.susbcriptions.unsubscribe();
  }

  ngOnInit(): void {
    this.susbcriptions.add(
      this.userService.getUserSelect().subscribe({
          next: (user) => {
            this.userSelect = user
          }, error : (error) => {
            console.error(error)
          }
        })
    )
  }

  selectUser(index?: number){
    this.userService.selectUserByIndex(index)
  }

  deleteUser(index?: number){
    this.userService.deleteUserByIndex(index)
  }

}
