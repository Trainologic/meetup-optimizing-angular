import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import {AppModule} from './app.module';
import {APP_STORE_KEY, AppStore, createAppStore} from './app.store';
import {TransferState} from '@angular/platform-browser';

export function createStore(state: TransferState) {
  let appStore = state.get(APP_STORE_KEY, null);
  if(!appStore) {
    appStore = createAppStore();
  }

  return appStore;
}

@NgModule({
  imports: [
    AppModule,
  ],
  providers: [
    {provide: AppStore, useFactory: createStore, deps: [TransferState]},
  ],
  bootstrap: [AppComponent]
})
export class ClientModule {
  constructor() {
  }
}
