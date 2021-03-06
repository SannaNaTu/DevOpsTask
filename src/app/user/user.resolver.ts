import { Injectable } from '@angular/core';
import { Resolve, ActivatedRouteSnapshot, Router } from '@angular/router';
import { FirebaseUserModel } from 'src/app/user/user.model';

import {UserService} from '../service/user.service';


@Injectable()
export class UserResolver implements Resolve<FirebaseUserModel> {

  constructor(public userService: UserService, private router: Router) { }

  resolve(route: ActivatedRouteSnapshot): Promise<FirebaseUserModel> {

    const user = new FirebaseUserModel();

    return new Promise((resolve, reject) => {
      this.userService.getCurrentUser()
        .then(res => {

          if (res.providerData[0].providerId == 'password') {

            user.name = res.displayName;
            user.provider = res.providerData[0].providerId;
            return resolve(user);
          } else {

            user.name = res.displayName;
            user.provider = res.providerData[0].providerId;
            return resolve(user);
          }
        }, err => {
          this.router.navigate(['/login']);
          return reject(err);
        });
    });
  }
}
