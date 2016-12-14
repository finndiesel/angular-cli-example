import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { People } from '../people';

@Component({
  selector: 'app-people',
  templateUrl: './people.component.html',
  styleUrls: ['./people.component.scss']
})
export class PeopleComponent implements OnInit {

  people: any = People;

  constructor(private router: Router) { }

  ngOnInit() {
  }

  navigateToPerson(index: number) {
    this.router.navigate(['/people', index])
  }

}
