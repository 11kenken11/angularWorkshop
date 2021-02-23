import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { User } from '../models';

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  usersSubject = new Subject<any[]>();
  private users: User[] = [];
  private url = 'https://jsonplaceholder.typicode.com/users';

  constructor(private Http: HttpClient) { }

  emitUsersSubject() {
    this.usersSubject.next(this.users.slice());
  }

  getUsersFromServer() {
    this.Http
    .get<any[]>(this.url)
    .subscribe(
      (response) => {
        this.users = response;
        this.emitUsersSubject();
      }, 
      (error) => {
        console.log('erreur chargement :  ' + error);
      }
    );
  }
}
