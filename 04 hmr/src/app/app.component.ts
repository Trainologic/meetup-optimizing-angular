import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  counter: number = 0;

  inc() {
    ++this.counter;
  }

  dec() {
    --this.counter;
  }
}
