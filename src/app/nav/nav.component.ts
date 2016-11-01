import { Component } from '@angular/core';
import { AngularFire, FirebaseListObservable } from "angularfire2/index";
// import { ROUTER_DIRECTIVES } from '@angular/router';

@Component({
  selector: 'ed-nav',
  styleUrls: ['./nav.component.scss'],
  templateUrl: './nav.component.html',
  // directives: [ROUTER_DIRECTIVES]
})
export class NavComponent { 
  allHorrorMovies: string[];
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

  getFilteredKeywords(searchText: string) {
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