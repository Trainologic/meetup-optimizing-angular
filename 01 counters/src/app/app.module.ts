import { BrowserModule } from '@angular/platform-browser';
import {ApplicationRef, NgModule, NgZone} from '@angular/core';


import { AppComponent } from './app.component';
import {config, trackChangeDetection, trackComponents} from 't-count-client-angular/main';
import {HttpClient, HttpClientModule} from '@angular/common/http';
import { ClockComponent } from './clock/clock.component';


@NgModule({
  declarations: [
    AppComponent,
    ClockComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
  constructor(appRef: ApplicationRef, ngZone: NgZone, http: HttpClient) {
    config({
      serverUrl: "http://localhost:3001",
      http: http,
    });

    trackComponents(appRef, ngZone);

    trackChangeDetection(appRef, ngZone);
  }
}
