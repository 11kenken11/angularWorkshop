import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { UsersService } from '../services/users.service';

@Component({
  selector: 'app-list-user',
  templateUrl: './list-user.component.html',
  styleUrls: ['./list-user.component.css']
})
export class ListUserComponent implements OnInit {

  users;
  usersSubscription: Subscription;

  constructor(private usersService: UsersService) { }

  ngOnInit(): void {
    this.usersService.getUsersFromServer();
      this.usersSubscription = this.usersService.usersSubject.subscribe(
        (users: any[]) => {
          this.users = users;
        }
      );
      this.usersService.emitUsersSubject();
  }

}
