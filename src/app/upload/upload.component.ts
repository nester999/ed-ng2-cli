import { Component, OnInit } from '@angular/core';
import { initializeApp, database } from 'firebase';
import { firebaseConfig } from '../../environments/firebase.config';

@Component({
  selector: 'app-upload',
  templateUrl: './upload.component.html',
  styleUrls: ['./upload.component.scss']
})
export class UploadComponent implements OnInit {
  progressVal = 0;
  constructor() { }

  ngOnInit() {
    // firebase.initializeApp(firebaseConfig);
  }

  onChange(event) {
    // get file
    var file = event.target.files[0];
    var files = event.srcElement.files;
    console.log(files);
    console.log(file);

    // var storage = firebase.storage();
    // console.log('storage ', storage);
    
    // // create a storage ref
    // var storageRef = storage.ref();
    // console.log('storageRef ', storageRef);

    // var imagesRef = storageRef.child('images');
    // console.log('imagesRef ', imagesRef);


    // Upload file
    // var task = imagesRef.put(file);

    // Update progress bar
  //   task.on('state_changed',

  //     function progress(snapshot) {
  //       var percentage = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
  //       this.progressVal = percentage;

  //     },

  //     function error(err) {

  //     },

  //     function complete() {

  //     }
  //   )


  } 

}
