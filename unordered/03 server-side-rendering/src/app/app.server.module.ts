import { NgModule } from '@angular/core';
import {ServerModule, ServerTransferStateModule} from '@angular/platform-server';

import { AppModule } from './app.module';
import { AppComponent } from './app.component';
import {APP_STORE_KEY, AppStore} from './app.store';
import {TransferState} from '@angular/platform-browser';

@NgModule({
  imports: [
    AppModule,
    ServerModule,
    ServerTransferStateModule,
  ],
  bootstrap: [AppComponent],
})
export class AppServerModule {
  constructor(state: TransferState, appStore: AppStore) {
    state.set(APP_STORE_KEY, appStore);
  }
}
