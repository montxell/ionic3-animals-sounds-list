import { Component } from '@angular/core';

import { ANIMALS } from '../../data/data.animals';

import { Animal } from '../../interfaces/animal.interface';


@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  // animals array is of the type Animal. We made an interface so we
  // can see and have a control of all the properties (for example: this.animals[0].audio)
  animals:Animal[] = [];


  constructor() {

    // Clone ANIMALS so when we delete or edit the list it won't change
    // the original data (data.animals.ts)
    this.animals = ANIMALS.slice(0);

  }

}
