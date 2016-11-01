import { Component } from '@angular/core';
// import { initializeApp, database } from 'firebase';
import { firebaseConfig } from '../environments/firebase.config';
import { AngularFire, FirebaseListObservable } from "angularfire2/index";
import { LessonsService } from "./shared/model/lessons.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [ LessonsService ]
})
export class AppComponent {
  title = 'Build the home screen!';
  typeahead: FirebaseListObservable<any>;

  constructor(private af: AngularFire, private lessonsService: LessonsService) {
    const messages$ : FirebaseListObservable<any> = af.database.list('messages')
    const typeahead$ : FirebaseListObservable<any> = af.database.list('typeahead')
    typeahead$.subscribe(console.log);
    this.typeahead = typeahead$;
  }

  getHeroImages() {
    this.lessonsService.getHeroImages();

  }
}
