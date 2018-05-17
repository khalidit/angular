import { Injectable } from '@angular/core';
import { User } from '../models/user.model';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private users: Array<User> = [
    new User('Khalid', 'ALIANNE', 'khalid.aliane@gmail.com', 'Coca cola', ['Java', 'Angular', 'Matrial Design']),
    new User('Yassine', 'Gourchane', 'yassine.gourchane@gmail.com', 'Pepsi', null)
  ];
  usersSubject: Subject<Array<User>> = new Subject();

  constructor() { }

  /**
   * Notifier les écouteur du subject
   */
  emitUsersSubject(): void {
    // Forcer le subject à emmettre ce qu'on lui transmet en argument, ici, une copie du tableau appareils
    this.usersSubject.next(this.users.slice());
  }

  addUser(user: User) {
    this.users.push(user);
    this.emitUsersSubject();
  }
}
