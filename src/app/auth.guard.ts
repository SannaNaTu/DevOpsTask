import {Injectable} from '@angular/core';
import {CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router} from '@angular/router';
import {Observable} from 'rxjs';
import {AuthService} from './service/auth.service';
import {map, take, tap} from 'rxjs/operators';
import { User} from 'src/app/login/user';
import {UserService} from './service/user.service';
import {AngularFireAuth} from '@angular/fire/auth';



@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {


  constructor(
    public afAuth: AngularFireAuth,
    public userService: UserService,
    private router: Router
  ) {}

  canActivate(): Promise<boolean> {
    return new Promise((resolve, reject) => {
      this.userService.getCurrentUser()
        .then(user => {
          this.router.navigate(['/user']);
          return resolve(false);
        }, err => {
          return resolve(true);
        });
    });
  }

}
//   constructor(
//     public authService: AuthService,
//     public router: Router
//   ) {
//   }
//
//   canActivate(
//     next: ActivatedRouteSnapshot,
//     state: RouterStateSnapshot): Observable<boolean> {
//
//     return this.authService.user.pipe(
//       take(1),
//       map(user => !!user),
//       tap(loggedIn => {
//         if (!loggedIn) {
//           console.log('access denied')
//           this.router.navigate(['admin/login']);
//         }
//       })
//     );
//   }
// }

//   canActivate(route: ActivatedRouteSnapshot): Observable<boolean> {
//   return this.authService.getLoggedInUser().pipe(take(1))
//     .map(authState => Boolean(authState))
//
//     .tap(auth => [auth ? this.router.navigate(['admin/login'] ) : true]);
// console.log('testi');
// }
// }
//     next: ActivatedRouteSnapshot,
//     state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
//     return true;
//   }
//   return;
//   this;
// .
//   authService;
// .
//
//   getLoggedInUser()
//
// .
//
//   pipe()

