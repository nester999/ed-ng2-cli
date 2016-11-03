import { Component, OnInit, Input } from "@angular/core";
import { LessonsService } from "../shared/model/lessons.service";
import { AngularFire, FirebaseListObservable } from "angularfire2/index";

@Component({
  selector: "app-home",
  templateUrl: "./home.component.html",
  styleUrls: ["./home.component.scss"],
  providers: [ LessonsService ]
})
export class HomeComponent implements OnInit {
  allHorrorMovies;

  // [
  //   "The Canal",
  //   "A Lonely Place To Die",
  //   "Dark Skies",
  //   "The Horde",
  //   "Exeter",
  //   "It",
  //   "The Other Side",
  //   "The Collector",
  //   "The Unbroken",
  //   "Here Comes the Devil",
  //   "Kidnapped",
  //   "Extraterrestrial",
  //   "High Lane",
  //   "Tucker & Dale vs. Evil",
  //   "Odd Thomas",
  //   "The Hallow",
  //   "Would You Rather",
  //   "Zombieland",
  //   "The Sixth Sense"
  // ];
  filtered: string[];
  constructor(private af: AngularFire) {
    const typeahead$ : FirebaseListObservable<any> = af.database.list('typeahead')
    typeahead$.subscribe(keywords => {
      this.allHorrorMovies = keywords.map(keyword => {
        return keyword.$value;
      })
    });
    // this.allHorrorMovies = typeahead$;
    // console.log('allHorror', this.allHorrorMovies)
  }

  ngOnInit() {
  }

  getHeroImages(searchText: string) {
    if(searchText === '') {
      this.filtered = [];
    }
    else if (searchText === 'show all') {
      this.filtered = this.allHorrorMovies;
    }
    else {
      this.filtered = this.allHorrorMovies.filter(horrorMovie => horrorMovie.toLowerCase().includes(searchText.toLowerCase()));
    }
    // this.filtered.push(searchText);
  }

}
