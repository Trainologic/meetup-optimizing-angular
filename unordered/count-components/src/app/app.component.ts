import {Component} from '@angular/core';
import {DatePipe} from '@angular/common';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  counter: number = 0;
  contacts: Contact[] = [
    {'id': 1, 'name': 'Ori'},
    {'id': 2, 'name': 'Roni'},
    {'id': 3, 'name': 'Udi'},
    {'id': 4, 'name': 'Tommy'},
  ];
  showContacts: boolean = true;

  constructor(p: DatePipe) {
    console.log('DatePipe', p);
  }

  onClockTick() {

  }

  noop() {
  }

  toggle() {
    this.showContacts = !this.showContacts;
  }
}

interface Contact {
  id: number;
  name: string;
}
