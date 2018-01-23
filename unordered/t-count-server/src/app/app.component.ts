import {Component, OnInit} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Counter} from '../common/counter';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  counters: Counter[];
  title = "abc";

  constructor(private http: HttpClient) {
  }

  ngOnInit() {
    setInterval(async ()=> {
      this.counters = await this.http.get<Counter[]>("/api/counter").toPromise();

      console.log(this);

      console.log(this.counters[0]);
    }, 1000);
  }
}

