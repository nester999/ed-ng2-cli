import { Component, OnInit } from '@angular/core';
import { firebaseConfig } from '../../environments/firebase.config';
import { AngularFireModule, AuthProviders, AuthMethods } from "angularfire2/index";
import { AngularFire } from 'angularfire2';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  loggedIn = false;
  emailField = '';
  passwordField = '';
  displayName = '';
  profilePic = '';

  constructor(public af: AngularFire) {
    firebase.auth().onAuthStateChanged(firebaseUser => {
      if(firebaseUser) {
        console.log('authStateChanged: ', firebaseUser);
        this.loggedIn = true;
        console.log('authStateChanged this ', this);
        this.displayName = firebaseUser.displayName;
        this.profilePic = firebaseUser.photoURL;
      } 
      else {
        console.log('not logged in anymore');
        this.loggedIn = false;
      }
    })
    // const auth = firebase.auth();
    // console.log('auth ', auth);
  }

  ngOnInit() {

  }

  onKeyEmail(email) {
    this.emailField = email;
  }

  onKeyPassword(password) {
    this.passwordField = password;
  }

  login(email, pass) {
    const auth = firebase.auth();
    console.log('login: ', email, 'pw: ', pass);
    const promise = auth.signInWithEmailAndPassword(email, pass);
    promise
      .then(user => {
        console.log('login user: ', user);
        this.loggedIn = true;
      })
      .catch(e => {
        console.log(e.message);
        this.loggedIn = false;
      });
  }

  loginWithFacebook(email, pass) {
    var provider = new firebase.auth.FacebookAuthProvider();
    console.log('logging in with FB...');
    firebase.auth().signInWithPopup(provider).then(function(result) {
      // This gives you a Facebook Access Token. You can use it to access the Facebook API.
      var token = result.credential.accessToken;
      this.loggedIn = true;
      // The signed-in user info.
      var user = result.user;
      // ...
    }).catch(function(error) {
      // Handle Errors here.
      // var errorCode = error.code;
      var errorMessage = error.message;
      // The email of the user's account used.
      // var email = error.email;
      // The firebase.auth.AuthCredential type that was used.
      // var credential = error.credential;
      // ...
    });
  }

  loginWithGoogle(email, pass) {
    var provider = new firebase.auth.GoogleAuthProvider();
    firebase.auth().signInWithPopup(provider).then(function(result) {
      // This gives you a Google Access Token. You can use it to access the Google API.
      var token = result.credential.accessToken;
      // The signed-in user info.
      var user = result.user;
      console.log('google user: ', result.user);
      this.loggedIn = true;
      this.displayName = user.displayName;
      // ...
    }).catch(function(error) {
      // Handle Errors here.
      // var errorCode = error.code;
      var errorMessage = error.message;
      // The email of the user's account used.
      // var email = error.email;
      // The firebase.auth.AuthCredential type that was used.
      // var credential = error.credential;
      // ...
    });
  }

  loginWithGithub(email, pass) {
    var provider = new firebase.auth.GithubAuthProvider();
    firebase.auth().signInWithPopup(provider).then(function(result) {
      // This gives you a Google Access Token. You can use it to access the Google API.
      var token = result.credential.accessToken;
      // The signed-in user info.
      var user = result.user;
      console.log('github user: ', result.user);
      this.loggedIn = true;
      this.displayName = user.displayName;
      // ...
    }).catch(function(error) {
      // Handle Errors here.
      // var errorCode = error.code;
      var errorMessage = error.message;
      // The email of the user's account used.
      // var email = error.email;
      // The firebase.auth.AuthCredential type that was used.
      // var credential = error.credential;
      // ...
    });
  }


  signUp(email, pass) {
    const auth = firebase.auth();
    console.log('auth ', auth);
    const promise = auth.createUserWithEmailAndPassword(email, pass);
    promise
      .then(user => {
        console.log('user: ', user);
        this.loggedIn = true;
      })
      .catch(e => {
        console.log(e.message);
        this.loggedIn = false;
      });
  }

  overrideLogin() {
    console.log('override login');

    this.af.auth.login({
      provider: AuthProviders.Anonymous,
      method: AuthMethods.Anonymous,
    });    
  }

  logout() {
    const auth = firebase.auth();
    console.log('log out');
    auth.signOut();
    this.loggedIn = false;
    this.displayName = ''

  }
}
