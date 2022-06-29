import { Injectable } from '@angular/core';
import { BehaviorSubject, catchError, map, of, Subject } from 'rxjs';
import { User } from '../models/user.model';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  userList:User[] = [
    {
      firstName: 'Jorge',
      lastName: 'Palacio',
      age: 26,
      address: 'Carrera 58 # 3b - 54',
      city: 'Barranquilla',
      country: 'Colombia',
      email: 'Jorge@coderhouse.com',
      postalCode: 832154
    },
    {
      firstName: 'Pablo',
      lastName: 'Garcia',
      age: 32,
      address: 'Av Jimenez # 96 - 47',
      city: 'Buenos Aires',
      country: 'Argentina',
      email: 'pablo@coderhouse.com',
      postalCode: 369852
    },
    {
      firstName: 'Mariano',
      lastName: 'Alvez',
      age: 32,
      address: 'Av Jimenez # 96 - 47',
      city: 'Buenos Aires',
      country: 'Argentina',
      email: 'pablo@coderhouse.com',
      postalCode: 369852
    }
  ]

  userSelected$ = new Subject<User | null>();
  users$ = new BehaviorSubject<User[]>(this.userList);

  constructor() { }

  addUser(user:User){
    this.userList.push(user)
    this.users$.next(this.userList)
  }

  getUsers(){
    return this.users$.asObservable()
  }

  getUserSelect(){
    return this.userSelected$.asObservable()
  }

  selectUserByIndex(index?: number){
    this.userSelected$.next(index !== undefined ? this.userList[index] : null)
  }

  deleteUserByIndex(index?: number){
    this.userList = this.userList.filter((_, i) => index != i)
    this.users$.next(this.userList)
  }

  searchUsersByName(name: string){
    return of(this.userList).pipe(
      map((users) => users.filter((user) => (user.firstName + ' ' + user.lastName).toLowerCase().includes(name.toLowerCase()))),
      catchError((error) => {throw new Error(error)})
    )
  }
}
