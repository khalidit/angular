import { Component, OnInit, OnDestroy } from '@angular/core';
import { User } from '../models/user.model';
import { Subscription } from 'rxjs';
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.scss']
})
export class UserListComponent implements OnInit, OnDestroy {

  users: Array<User>;
  usersSubscription: Subscription;
  constructor(private userService: UserService) { }

  ngOnInit(): void {
    this.usersSubscription = this.userService.usersSubject.subscribe(
      (users: Array<User>) => {
        this.users = users;
      }
    );
    this.userService.emitUsersSubject();
  }
  ngOnDestroy(): void {
    this.usersSubscription.unsubscribe();
  }
}
