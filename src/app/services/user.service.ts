import {User} from '../models/User.model';
import {Subject} from 'rxjs';

export class UserService {
  private users: User[] = [
    {
      firstName: 'imad',
      lastName: 'morabit',
      email: 'imadealmorabit@gmail.com',
      drinkPreference: 'coca',
      hobbies: [
        'coder',
        'degustation de cafe'
      ]
    }
  ];
  userSubject = new Subject<User[]>();

  emitUsers(){
    this.userSubject.next(this.users.slice());
  }

  addUser(user: User){
    this.users.push(user);
    this.emitUsers();
  }

}
