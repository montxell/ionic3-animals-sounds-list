import { Component } from '@angular/core';

import { ANIMALS } from '../../data/data.animals';

import { Animal } from '../../interfaces/animal.interface';


@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  // animals array is of the type Animal. We made an interface so we
  // can see and have a control of all the properties (for example:
  // this.animals[0].audio)
  animals:Animal[] = [];

  // new Audio is an object by default of html5
  audio = new Audio();

  audioTime: any;


  constructor() {

    // Clone ANIMALS so when we delete or edit the list it won't change
    // the original data (data.animals.ts)
    this.animals = ANIMALS.slice(0);

  }


  playAudio( animal:Animal ) {

    this.pauseAudio( animal );

    if( animal.playing ) {
      animal.playing = false;
      return;
    }

    // audio has the property "src" that it's the origin of the audio
    this.audio.src = animal.audio;

    // audio properties by default
    this.audio.load();
    this.audio.play();

    // set property of playing to true
    animal.playing = true;

    // control audio: set playing to false based on the duration (duration set to milliseconds)
    this.audioTime = setTimeout( () => animal.playing = false, animal.duration * 1000 );

  }


  private pauseAudio( selectedAnimal: Animal ) {

    clearTimeout( this.audioTime );

    // audio properties by default
    this.audio.pause();
    this.audio.currentTime = 0;

    for( let animal of this.animals ) {

      if( animal.name != selectedAnimal.name ) {
        animal.playing = false;
      }
    }

  }

}
