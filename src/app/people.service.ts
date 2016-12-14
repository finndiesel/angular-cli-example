import { Injectable } from '@angular/core';
import { People } from './people';

@Injectable()
export class PeopleService {

  constructor() { }

  getPeople() {
    return People;
  }

  getPerson(index: number) {
    return People[index]
  }

}
