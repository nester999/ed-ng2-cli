import { Component } from '@angular/core';
import { initializeApp, database } from 'firebase';
import { firebaseConfig } from '../environments/firebase.config';
import { AngularFire, FirebaseListObservable } from "angularfire2/index";
import { LessonsService } from "./shared/model/lessons.service";
import { FirebaseService } from './firebase.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  providers: [ LessonsService, FirebaseService ]
})
export class AppComponent {
  title = 'Build the home screen!';
  typeahead: FirebaseListObservable<any>;

  constructor(private af: AngularFire, private lessonsService: LessonsService) {
    firebase.initializeApp(firebaseConfig);

    const messages$ : FirebaseListObservable<any> = af.database.list('messages')
    const typeahead$ : FirebaseListObservable<any> = af.database.list('typeahead')
    typeahead$.subscribe(console.log);
    this.typeahead = typeahead$;



    var root = firebase.database().ref();
    var typeahead = firebase.database().ref('typeahead');

    root.on('value', function(snap) {
      console.log('firebase in app component: snap key ', snap.key, ' snap val', snap.val());
    });
    typeahead.on('value', snap => {
      console.log('firebase in app component: snap key ', snap.key, ' snap val', snap.val());
    });
  }

  getHeroImages() {
    this.lessonsService.getHeroImages();

  }
}
