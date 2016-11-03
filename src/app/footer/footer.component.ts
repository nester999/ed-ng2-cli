import { Component, OnInit } from '@angular/core';
// Import the Image interface
import {Image} from '../image';
import { MoviesService } from '../movies.service';

@Component({
  selector: 'ed-footer',
  styleUrls: ['./footer.component.scss'],
  templateUrl: './footer.component.html',
  providers: [ MoviesService ]
})
export class FooterComponent implements OnInit { 
  //images data to be bound to the template
    public images: Image[];
    getData: any;

    constructor (private moviesService: MoviesService) {}

    ngOnInit() {
    }

}