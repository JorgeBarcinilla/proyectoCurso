import { Injectable } from '@angular/core';
import { BehaviorSubject, catchError, map, of } from 'rxjs';
import { User } from '../models/user.model';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  userList:User[] = [
    {
      id: 1,
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
      id: 2,
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
      id: 3,
      firstName: 'Mariano',
      lastName: 'Alvez',
      age: 32,
      address: 'Av Jimenez # 96 - 47',
      city: 'Buenos Aires',
      country: 'Argentina',
      email: 'pablo@coderhouse.com',
      postalCode: 369852
    },
    {
      id: 4,
      firstName: 'Nahuel',
      lastName: 'Gonzalez',
      age: 23,
      address: 'Carrera 58 # 3b - 54',
      city: 'Barranquilla',
      country: 'Colombia',
      email: 'Jorge@coderhouse.com',
      postalCode: 832154
    },
    {
      id: 5,
      firstName: 'Julio',
      lastName: 'Martinez',
      age: 51,
      address: 'Av Jimenez # 96 - 47',
      city: 'Buenos Aires',
      country: 'Argentina',
      email: 'pablo@coderhouse.com',
      postalCode: 369852
    },
    {
      id: 6,
      firstName: 'Ignacio',
      lastName: 'Neprias',
      age: 22,
      address: 'Av Jimenez # 96 - 47',
      city: 'Buenos Aires',
      country: 'Argentina',
      email: 'pablo@coderhouse.com',
      postalCode: 369852
    }
  ]


  userSelected$ = new BehaviorSubject<User | null>(null);
  users$ = new BehaviorSubject<User[]>(this.userList);

  constructor() { }

  addUser(user:User){
    this.userList.push(user)
    this.users$.next(this.userList)
  }

  getUsers(nombre?:string){
    return this.users$.asObservable().pipe(
      map((users) => {
        return nombre ? users.filter(user =>  (user.firstName.toLowerCase() + ' ' + user.lastName.toLowerCase()).includes(nombre.toLowerCase())) : users
      })
    )
  }

  getUserSelect(){
    return this.userSelected$.asObservable()
  }

  selectUserByIndex(index?: number){
    console.log(this.userList[index!])
    this.userSelected$.next(index !== undefined ? this.userList[index] : null)
  }

  selectUserById(id?: number){
    this.userSelected$.next(this.userList.find(user => user.id === id) || null)
  }

  deleteUserByIndex(index?: number){
    this.userList = this.userList.filter((_, i) => index != i)
    this.users$.next(this.userList)
  }

  deleteUserById(id?: number){
    this.userList = this.userList.filter((user) => id != user.id)
    this.users$.next(this.userList)
  }

  searchUsersByName(name: string){
    return of(this.userList).pipe(
      map((users) => users.filter((user) => (user.firstName + ' ' + user.lastName).toLowerCase().includes(name.toLowerCase()))),
      catchError((error) => {throw new Error(error)})
    )
  }
}
