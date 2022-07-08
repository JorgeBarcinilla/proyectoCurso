import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { ActivatedRoute, Router } from '@angular/router';
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

  textFromOtherComponent: string | null = null

  displayedColumnsTable = ['index', 'firstName', 'lastName', 'email' ,'country', 'action']
  tableDataSource$: Observable<MatTableDataSource<User>>;

  userSelect: User | null = null;

  susbcriptions: Subscription = new Subscription();

  constructor(private userService: UserService, private router: Router, private activatedRoute: ActivatedRoute) {
    this.tableDataSource$ = this.userService.getUsers().pipe(tap((users) => console.log(users)),
                                                            map((users) => new MatTableDataSource<User>(users)));
  }

  ngOnDestroy(){
    this.susbcriptions.unsubscribe();
  }

  ngOnInit(): void {
    this.susbcriptions.add(
      this.activatedRoute.paramMap.subscribe((param) => {
        console.log(param)
        this.textFromOtherComponent = param.get('from')
      })
    )
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

  navigateToForm(userIndex: number){
    this.router.navigate(['/'+userIndex])
  }

}
