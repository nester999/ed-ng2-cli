import { Component, Input } from '@angular/core';
// Import the Image interface
import {Image} from '../image';
// import { MoviesService } from './movies.service';

@Component({
  selector: 'ed-modal',
  styleUrls: ['./modal.component.scss'],
  templateUrl: './modal.component.html',
  // providers: [ MoviesService ]
})
export class ModalComponent { 
  //images data to be bound to the template
    public images: Image[];
    getData: any;
    @Input() modalTitle: Image;

    // constructor (private moviesService: MoviesService) {}

    // ngOnInit() {
    // }

}