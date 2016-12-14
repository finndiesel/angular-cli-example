import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router'

import { People } from '../people';
import { PeopleService } from '../people.service'

@Component({
  selector: 'app-person',
  templateUrl: './person.component.html',
  styleUrls: ['./person.component.scss']
})
export class PersonComponent implements OnInit {

  person: any;

  constructor(private route: ActivatedRoute, private router: Router, private peopleService: PeopleService) { }

  ngOnInit() {
    this.route.params.subscribe( (params: Params) => this.setPerson(params['id']) )
  }

  setPerson(index: number) {
    this.person = this.peopleService.getPerson(index);
  }

  goHome() {
    this.router.navigate(['/'])
  }

}
