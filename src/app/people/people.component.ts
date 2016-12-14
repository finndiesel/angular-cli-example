import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { PeopleService } from '../people.service';

@Component({
  selector: 'app-people',
  templateUrl: './people.component.html',
  styleUrls: ['./people.component.scss']
})
export class PeopleComponent implements OnInit {

  people: any;

  constructor(private router: Router, private peopleService: PeopleService) { }

  ngOnInit() {
    this.people = this.peopleService.getPeople();
  }

  navigateToPerson(index: number) {
    this.router.navigate(['/people', index])
  }

}
