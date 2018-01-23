import {makeStateKey} from '@angular/platform-browser';

export abstract class AppStore {
  counter: number;
}

export function createAppStore() {
  console.log("createAppStore");

  const appStore: AppStore = {
    counter: 0,
  };

  return appStore;
}

export const APP_STORE_KEY = makeStateKey<AppStore>('appStore');
