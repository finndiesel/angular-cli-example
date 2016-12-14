import { Routes } from '@angular/router';
import { PeopleComponent } from './people/people.component';
import { PersonComponent } from './person/person.component'

export const appRoutes: Routes = [
    { path: '', component: PeopleComponent },
    { path: 'people/:id', component: PersonComponent },
]
