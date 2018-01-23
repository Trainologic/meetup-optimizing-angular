import { Component } from '@angular/core';
import {Contact} from './contact-list/contact-list.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  contacts: Contact[];

  constructor() {
    this.contacts = [
      {"id": 1, "name": "Ori"},
      {"id": 2, "name": "Roni"},
      {"id": 3, "name": "Udi"},
      {"id": 4, "name": "Tommy"},
    ];
  }

  add() {
    const newContact = {id:5, name: "Beni"};
    this.contacts.push(newContact);
  }
}
