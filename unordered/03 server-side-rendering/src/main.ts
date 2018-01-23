import { enableProdMode } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from './app/app.module';
import { environment } from './environments/environment';
import {AppStore, createAppStore} from './app/app.store';
import {ClientModule} from './app/client.module';

if (environment.production) {
  enableProdMode();
}

document.addEventListener('DOMContentLoaded', () => {
  platformBrowserDynamic().bootstrapModule(ClientModule, {
    // providers: [
    //   {provide: AppStore, useFactory: createAppStore, deps:[]}
    // ]
  })
  .catch(err => console.log(err));
});
