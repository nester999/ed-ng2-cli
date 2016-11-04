import { Component, 
  OnInit, 
  Input,
  trigger,
  state,
  style,
  transition,
  animate } from '@angular/core';
// import { TimerWrapper } from '@angular/core/src/facade/async';
import { NgClass } from '@angular/common';
// Import the Image interface
import {Image} from '../image';
import { MoviesService } from '../movies.service';
import { ModalComponent } from '../modal/modal.component';

@Component({
  selector: 'ed-hero-slider',
  styleUrls: ['./hero-slider.component.scss'],
  templateUrl: './hero-slider.component.html',
  // directives: [NgClass, ModalComponent],
  providers: [ MoviesService ],
  animations: [
    trigger('myanim', [
      state('void', style({opacity: 0, transform: 'translateY(10px)'})),
      state('blah', style({opacity: 0})),
      state('derp', style({opacity: 1})),
      transition('void => *', [
        // style({opacity: 1}),
        animate('1000ms cubic-bezier(0.49, 0, 0.71, 1.25)')
      ]),
      // transition('void => *', [
      //         style({opacity: 1}),
      //         animate('1000ms ease-in'))
      //       ])
      // transition('* => void', [
      //   style({transform: 'scaleX(0)'}),
      //   animate('8000ms')
      // ]),
    ])
  ]
})
export class HeroSliderComponent implements OnInit { 
  //images data to be bound to the template
    public images: Image[];
    getData: any;
    state: string = 'derp';
    selectedTitle: Image;

    container;
    @Input() isInfinite = true;
    visibleSlides = 5;
    curIndex = this.isInfinite ? this.visibleSlides : 0;
    moveCounter = this.isInfinite ? this.visibleSlides * -1 : 0;
    totalNumberOfSlides;
    isActivePagination;
    currentlyLooping = false; 
    public rightPlaceholder: Image[];
    
    carouselHeight = 220;
    imageWidth = 1.777778 * this.carouselHeight; // 1280/720


    

    constructor (private moviesService: MoviesService) {

    }

    ngOnInit() {
      this.getBackdropImages();
      // console.log('this.images ', this.images);
    }

    toggleState() {
      this.state = this.state === 'derp' ? 'sup' : 'derp';
    }

    onSelect(clickedTitle, i) {
      // console.log('clickedTitle: ', clickedTitle);
      this.selectedTitle = clickedTitle;
      this.images[i].isActive = true;
    }

    resetActive() {
      if(this.images) {
        // console.log('this.images: ', this.images);
        for (var i = 0; i < this.images.length; ++i) {
          // this.images[i].isActive = false;
          // console.log('image[' + i + '].isActive ', this.images[i].isActive)
          if(this.images[i].isActive) {
            console.log('active image. SHOULDNT SEE!', i);
          }
        }
        // this.images[this.visibleSlides].isActive = true;
      }
      // this.images.forEach((image, i) => {
        // image.isActive = (this.curIndex === i);
        // console.log('image[' + i + '].isActive ', image.isActive)
        // if(image.isActive) {
          // console.log('active image ', i);
        // }
      // })
    }

    resetCarousel(direction: string) { 

      setTimeout(() => {
        // alert('in timeout');
        if(direction === 'next') {
          // console.log(this)
          this.currentlyLooping = true;
          this.images[this.curIndex].isActive = false;
          this.images[0].isActive = true;
          this.curIndex = this.visibleSlides;
          this.moveCounter = -1 * (this.visibleSlides);
          // this.setActive();
        }
        else if(direction === 'prev') {
          // console.log('in prev', this)
          this.currentlyLooping = true;
          this.images[this.curIndex].isActive = false;
          this.images[0].isActive = true;
          this.curIndex = this.totalNumberOfSlides - this.visibleSlides;
          this.moveCounter = -1 * (this.totalNumberOfSlides - this.visibleSlides);
          // this.setActive();
        }
      }, 500);
    }

    switchTransition() {
      return ((this.currentlyLooping ? '0s' : '0.3s all ease-in-out'));
    }

    getCarouselHeight() {
      return this.carouselHeight + 'px';
    }

    getSlidesWidth() {
      return ((this.totalNumberOfSlides+1/this.visibleSlides) * 100) + '%';
    }

    getImageWidth() {
      return this.imageWidth + 'px';
    }

    moveCarousel() {
      return ((this.moveCounter * this.imageWidth)) + 'px';
    }

    counterMoveCarousel() {
      return (-1*(this.moveCounter * this.imageWidth)) + 'px';
    }

    activePagination(curIndex) {
      return (curIndex === this.curIndex);
    }

    placeSlides(curIndex) {
      return (curIndex * this.imageWidth) + "px";
    }

    getBackdropImages() {
      this.moviesService.getHeroImages() 
        .subscribe(
           data => {
             this.images = data;
             if(this.isInfinite) {
               let length = this.images.length;
               let prevVisibleImages = data.slice((length - this.visibleSlides),length);
               let nextVisibleImages = data.slice(0,this.visibleSlides);
               // console.log('prevVisibleImages ', prevVisibleImages);
               this.images = this.images.concat(nextVisibleImages);
               this.images = prevVisibleImages.concat(this.images);
               this.curIndex = this.visibleSlides;
               this.moveCounter = this.visibleSlides * -1;
               console.log('this.images', this.images);
             }
             else {
               this.curIndex = 0;
               this.moveCounter = 0;
             }
             this.totalNumberOfSlides = this.images.length-1;
             // this.images[this.visibleSlides].isActive = true;
             console.log('this.curIndex ', this.curIndex);
             this.resetActive();
           },
           error => alert(error),
           () => console.log('finished')
        );
    }

    prev() {
      this.currentlyLooping = false;
      this.images[this.curIndex].isActive = false;
      if(this.isInfinite) {
        if(this.moveCounter < (this.visibleSlides)*-1 ) {
          this.moveCounter++;
          this.curIndex--;
        }
        else if(this.curIndex === (this.visibleSlides)) {
          this.moveCounter++;
          this.resetCarousel('prev');
        }
      }
      else {
        if(this.moveCounter < 0) {
          this.moveCounter++;
          if (this.curIndex <= 0) {
            this.curIndex = this.totalNumberOfSlides;
          } 
          else {
            this.curIndex--;
          }
          // this.reorganizeSlides(-1);
        }
        else if(this.curIndex > 0) {
          this.curIndex--;
        }
        // this.setActive();
        // this.images.push(this.images.shift());
        console.log(this.curIndex + ' of ' + this.totalNumberOfSlides);

      }
      this.images[this.curIndex].isActive = true;
      // setTimeout(() => {
      //   this.setActive();
      // }, 1000);
      
    }

    // reorganizeSlides(direction) {
    //   if(direction === -1) {
    //     var lastImage = this.images.pop();
    //     this.images.unshift(lastImage);
    //   }
    //   else if(direction === 1){
    //     this.images.push(this.images.shift());
    //   }
    // }

    next() {
      this.currentlyLooping = false;
      this.images[this.curIndex].isActive = false;
      // this.setActive();
      if(this.moveCounter >= ((this.totalNumberOfSlides - this.visibleSlides) * -1)) {
        this.moveCounter--;
        this.curIndex++;
        
      }
      else if(this.curIndex < this.totalNumberOfSlides) {
        this.curIndex++;
      }
      if(this.isInfinite) {
        if(this.curIndex > (this.totalNumberOfSlides - this.visibleSlides)) {
          
          // console.log('getting in 0 setting area?')
          // this.moveCarousel().then(function() {
          // })
          this.resetCarousel('next');
        }
      }
      this.images[this.curIndex].isActive = true;
      // setTimeout(() => {
      //   this.setActive();
      // }, 1000);
      
      // this.reorganizeSlides(1);
       
      // setTimeout(function() {
        // var lastImage = this.images.pop();
        // this.images.unshift(lastImage);
         
      // }, 1000);
      // console.log(this.curIndex + ' of ' + this.totalNumberOfSlides);

    }
}