import {makeStateKey, StateKey} from '@angular/platform-browser';

export abstract class AppStore {
  counter: number;
}

const appStore: AppStore = {
  counter: 0
};

export const APP_STORE_KEY: StateKey<AppStore> = makeStateKey<AppStore>("appStore");
