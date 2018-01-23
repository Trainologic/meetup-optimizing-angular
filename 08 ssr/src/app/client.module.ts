import {NgModule} from '@angular/core';
import {AppComponent} from './app.component';
import {AppModule} from './app.module';
import {APP_STORE_KEY, AppStore} from './app.store';
import {BrowserTransferStateModule, TransferState} from '@angular/platform-browser';

export function createAppStore(state: TransferState) {
  let appStore = state.get(APP_STORE_KEY, null);
  if(!appStore) {
    appStore = {
      counter: 0,
    };
  }

  return appStore;
}

@NgModule({
  imports: [
    AppModule,
    BrowserTransferStateModule,
  ],
  providers: [
    {provide: AppStore, useFactory: createAppStore, deps: [TransferState]},
  ],
  bootstrap: [AppComponent]
})
export class ClientModule {
}
