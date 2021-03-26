import {Injectable} from '@angular/core';
import {BehaviorSubject, Observable} from 'rxjs';
import {AngularFireAuth} from '@angular/fire/auth';
import {Router} from '@angular/router';
import * as firebase from 'firebase/app';
import {User} from 'src/app/login/user';
import {AuthComponent} from '../auth/auth.component';
// import 'rxjs/add/operator/toPromise';


@Injectable({
  providedIn: 'root'
})
export class AuthService {
  constructor(
    public afAuth: AngularFireAuth
  ) {
  }

  doRegister(value) {
    return new Promise<any>((resolve, reject) => {
      firebase.auth().createUserWithEmailAndPassword(value.email, value.password)
        .then(res => {
          resolve(res);
        }, err => reject(err));
    });
  }

  doLogin(value) {
    return new Promise<any>((resolve, reject) => {
      firebase.auth().signInWithEmailAndPassword(value.email, value.password)
        .then(res => {
          resolve(res);
        }, err => reject(err));
    });
  }

  doLogout() {
    return new Promise((resolve, reject) => {
      if (firebase.auth().currentUser) {
        this.afAuth.auth.signOut();
        resolve();
      } else {
        reject();
      }
    });
  }
}




//   // private userEmail: BehaviorSubject<string> = new BehaviorSubject<string>('');
//
//   user: Observable<User>;
//
// //
//   constructor(public afAuth: AngularFireAuth,
//               public router: Router,
//   ) {

    // this.afAuth.authState.subscribe(user => {
    //     if (user != null) { this.userEmail.next(user.email); }
    //   }
    // );
  // }
  //
  // login(user: User) {
  //   console.log('Verifying user with email' + user.eMail);
  //   return this.afAuth.auth.signInWithEmailAndPassword(user.eMail, user.passWord)
  //     .then(result => {
  //       // this.userEmail.next(user.eMail);
  //       console.log('sisällä ollaan')
  //       this.router.navigate(['admin/main']);
  //     })
  //     .catch((error) => {
  //       console.log('husstooon');
  //     });
  // }
  //
  // logout() {
  //   return this.afAuth.auth.signOut()
  //     .then(() => {
  //       // this.userEmail.next('');
  //       this.router.navigate(['calculator']);
  //     });
  // }

// getLoggedInUser(): any {
// //   return this.afAuth.authState;
// // }
// //
// // checkLoggedIn() {
// //   return this.userEmail;
// // }
// //

