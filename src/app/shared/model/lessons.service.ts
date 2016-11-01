import { Injectable } from '@angular/core';
import { Headers, Http } from '@angular/http';


@Injectable()
export class LessonsService {

  constructor(private http: Http) { }

  getHeroImages() {
    console.log('hero images yo');
    // return this.http.get('http://api.themoviedb.org/3/movie/latest?api_key=ecda3228e70942921f2177da1ff9ba5d')
    // return this.http.get('http://api.themoviedb.org/3/movie/top_rated?api_key=ecda3228e70942921f2177da1ff9ba5d')
    //   .map(response => {
    //     console.log('response ', response.json());
    //     var _results = response.json().results;
    //     console.log('results ', _results)
    //     var heroImages: Image[] = [];
    //     _results.forEach((movie, i) => {
    //       var curImage: Image = {
    //         title: movie.title,
    //         url: this.imgPath + 'w1280' + movie.backdrop_path,
    //         isActive: false
    //       };

    //       heroImages.push(curImage);
    //     });
    //     console.log('heroImages ', heroImages);
    //     return heroImages;
    //   })
  }
}
