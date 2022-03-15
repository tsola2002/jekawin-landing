import { Injectable } from '@angular/core';
import { AngularFireDatabase, AngularFireList, AngularFireObject } from '@angular/fire/compat/database';
import { User } from './user';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private dbPath = '/Users';
  usersRef: AngularFireList<any>;
  userRef: AngularFireObject<any>;

  constructor(private db: AngularFireDatabase) { }

  // CREATE USER
  AddUser(user: User) {
    this.usersRef.push({
      email: user.email,
    });
    // .catch(error => {
    //   this.errorMgmt(error);
    // })
  }

  // GET USERS LIST
  GetUserList() {
    // this uses list method in the firelist library
    this.usersRef = this.db.list('Users');
    return this.usersRef;
  }

  // ERROR MANAGEMENT
  private errorMgmt(error: any) {
    console.log(error);
  }


}
