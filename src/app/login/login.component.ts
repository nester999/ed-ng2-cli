import { Component, OnInit } from '@angular/core';
import { firebaseConfig } from '../../environments/firebase.config';
import { AngularFireModule, AuthProviders, AuthMethods } from "angularfire2/index";
import { AngularFire } from 'angularfire2';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  constructor((public af: AngularFire) {
    this.af.auth.subscribe(auth => console.log(auth));
  }

  ngOnInit() {

  }

  // login() {
  //   console.log('login');
  //   this.af.auth.login({
  //     provider: AuthProviders.Twitter,
  //     method: AuthMethods.Popup,
  //   });
  // }
  // overrideLogin() {
  //   console.log('override login');

  //   this.af.auth.login({
  //     provider: AuthProviders.Anonymous,
  //     method: AuthMethods.Anonymous,
  //   });    
  // }

  // logout() {
  //   console.log('log out');
  //   this.af.auth.logout();
  // }
}
