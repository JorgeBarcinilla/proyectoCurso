import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, catchError, map, Observable, of } from 'rxjs';
import { User } from '../models/user.model';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  userList:User[] = [];


  userSelected$ = new BehaviorSubject<User | null>(null);
  users$ = new BehaviorSubject<User[]>(this.userList);

  constructor(private httpClient: HttpClient) { }

  login(user:string, password:string){
    console.log(user,
      password)
    return this.getUsers().pipe(map((users) => users[0]));
  }

  addUser(user:User){
    this.userList.push(user)
    this.users$.next(this.userList)
  }

  getUsers(nombre?:string): Observable<User[]>{
    return this.httpClient.get<User[]>('https://62ce1596066bd2b6992faee8.mockapi.io/api/v1/'+'users',{headers: new HttpHeaders({
      "authorization": 'Este es el token'
    })}).pipe(
      map((users) => {
        return nombre ? users.filter(user =>  (user.firstName.toLowerCase() + ' ' + user.lastName.toLowerCase()).includes(nombre.toLowerCase())) : users
      }),
      catchError((error) => {
        console.log(error)
        throw new Error()
      })
    );
  }

  getUserSelect(){
    return this.userSelected$.asObservable()
  }

  /*selectUserByIndex(index?: number){
    console.log(this.userList[index!])
    this.userSelected$.next(index !== undefined ? this.userList[index] : null)
  }*/

  selectUserById(id: number): Observable<User>{
    //this.userSelected$.next(this.userList.find(user => user.id === id) || null)
    return this.httpClient.get<User>('https://62ce1596066bd2b6992faee8.mockapi.io/api/v1/'+'users/'+id);
  }

  deleteUserByIndex(index?: number){
    this.userList = this.userList.filter((_, i) => index != i)
    this.users$.next(this.userList)
  }

  deleteUserById(id: number){
    return this.httpClient.delete('https://62ce1596066bd2b6992faee8.mockapi.io/api/v1/'+'users/'+id);
  }

  updateDate(data: User){
    return this.httpClient.put('https://62ce1596066bd2b6992faee8.mockapi.io/api/v1/'+'users/'+data.id, data);
  }

  searchUsersByName(name: string){
    return of(this.userList).pipe(
      map((users) => users.filter((user) => (user.firstName + ' ' + user.lastName).toLowerCase().includes(name.toLowerCase()))),
      catchError((error) => {throw new Error(error)})
    )
  }
}
