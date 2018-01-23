import {ChangeDetectionStrategy, Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-contact-list',
  templateUrl: './contact-list.component.html',
  styleUrls: ['./contact-list.component.css'],
  //changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ContactListComponent implements OnInit {
  @Input() contacts: Contact[];

  constructor() { }

  ngOnInit() {
  }
}

export interface Contact {
  id: number;
  name: string;
}
