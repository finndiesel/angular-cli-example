import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router'

import { People } from '../people';

@Component({
  selector: 'app-person',
  templateUrl: './person.component.html',
  styleUrls: ['./person.component.scss']
})
export class PersonComponent implements OnInit {

  person: any;

  constructor(private route: ActivatedRoute, private router: Router) { }

  ngOnInit() {
    this.route.params.subscribe( (params: Params) => this.setPerson(params['id']) )
  }

  setPerson(index: number) {
    this.person = People[index];
  }

  goHome() {
    this.router.navigate(['/'])
  }

}
