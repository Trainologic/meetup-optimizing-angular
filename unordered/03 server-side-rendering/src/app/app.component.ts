import { Component } from '@angular/core';
import {AppStore} from './app.store';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  constructor(private appStore: AppStore) {
  }

  get counter() {
    return this.appStore.counter;
  }

  inc() {
    ++this.appStore.counter;
  }
}
