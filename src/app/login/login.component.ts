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
      
      
      this.loggedIn = true;  
      // this.log = firebaseUser;
      console.log('====');
      console.log(firebaseUser);
      console.log('====');
      if(firebaseUser) {
        this.bk = true;
        console.log('if firebaseUser loggedIn: ', this.loggedIn);
        // console.log('authStateChanged: ', firebaseUser);
        // this.loggedIn = true;
        // console.log('authStateChanged this ', this);
        this.displayName = firebaseUser.displayName;
        this.profilePic = firebaseUser.photoURL;
        if(firebaseUser.isAnonymous) {
          this.loggedIn = true;
          var isAnonymous = firebaseUser.isAnonymous;
          this.displayName = 'Creeper';
          this.profilePic = 'http://65.media.tumblr.com/avatar_9f2035ed5e7b_128.png';
          var uid = firebaseUser.uid;
          console.log('anonymous user id ', uid);
        }
      } 
      else {
        console.log('not logged in anymore');
      this.loggedIn = false;
      }
    })
    // const auth = firebase.auth();
    // console.log('auth ', auth);
  }
  bk: boolean = false;
  log: string;
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
    firebase.auth().signInWithPopup(provider).then(result => {
      // This gives you a Facebook Access Token. You can use it to access the Facebook API.
      var token = result.credential.accessToken;
      this.loggedIn = true;
      // The signed-in user info.
      var user = result.user;
      console.log('facebook user ', user);
      // ...
    }).catch(error => {
      // Handle Errors here.
      // var errorCode = error.code;
      // console.log('error message: ', error, '\nerror email: ', error.email, '\nerror credential: ', error.credential);
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
    firebase.auth().signInWithPopup(provider).then(result => {
      // This gives you a Google Access Token. You can use it to access the Google API.
      var token = result.credential.accessToken;
      // The signed-in user info.
      var user = result.user;
      console.log('google user: ', result.user);
      this.loggedIn = true;
      console.log('google this: ', this);
      this.displayName = user.displayName;
      // ...
    }).catch(error => {
      // Handle Errors here.
      // var errorCode = error.code;
      // console.log('error message: ', error, '\nerror email: ', error.email, '\nerror credential: ', error.credential);
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
    firebase.auth().signInWithPopup(provider).then(result => {
      // This gives you a Google Access Token. You can use it to access the Google API.
      var token = result.credential.accessToken;
      // The signed-in user info.
      var user = result.user;
      console.log('github user: ', result.user);
      this.loggedIn = true;
      this.displayName = user.displayName;
      // ...
    }).catch(error => {
      // Handle Errors here.
      // var errorCode = error.code;
      // console.log('error message: ', error, '\nerror email: ', error.email, '\nerror credential: ', error.credential);
      var errorMessage = error.message;
      // The email of the user's account used.
      // var email = error.email;
      // The firebase.auth.AuthCredential type that was used.
      // var credential = error.credential;
      // ...
    });
  }

  loginAnonymously() {
    // this.loggedIn = true;
    firebase.auth().signInAnonymously().catch(error => {
      // Handle Errors here.
      // var errorCode = error.code;
      var errorMessage = error.message;
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
        // console.log('error message: ', e, '\nerror email: ', e.email, '\nerror credential: ', e.credential);
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
    console.log('logout this: ', this);
    this.loggedIn = false;
    // this.emailField = '';
    // this.passwordField = '';
    this.displayName = '';
    this.profilePic = '';

  }
}
