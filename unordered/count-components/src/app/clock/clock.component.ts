import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-clock',
  templateUrl: './clock.component.html',
  styleUrls: ['./clock.component.css']
})
export class ClockComponent implements OnInit {
  time: Date;
  @Input() format: string = "HH:mm:ss";
  @Output() tick: EventEmitter<void> = new EventEmitter<void>();

  constructor() {
    this.time = new Date();
  }

  ngOnInit() {

  }

}
