import { BrowserModule } from '@angular/platform-browser';
import {ApplicationRef, Inject, NgModule, NgZone} from '@angular/core';


import { AppComponent } from './app.component';
import { ClockComponent } from './clock/clock.component';
import {DatePipe} from '@angular/common';
import { ContactItemComponent } from './contact-item/contact-item.component';
import {HttpClient, HttpClientModule} from '@angular/common/http';
import * as countersClient from "counters-client";


@NgModule({
  declarations: [
    AppComponent,
    ClockComponent,
    ContactItemComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
  ],
  providers: [
    DatePipe,
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
  constructor(@Inject(ApplicationRef) appRef: any, http: HttpClient, ngZone: NgZone) {
    countersClient.config({host: "http://localhost:3000", http});
    countersClient.trackComponents(appRef, ngZone);
    countersClient.trackChangeDetection(appRef, ngZone);
  }
}

