import { HttpClient } from "@angular/common/http";
import { ApplicationRef, NgZone } from "@angular/core";
export declare function config(args: {
    serverUrl: string;
    http: HttpClient;
}): void;
export declare function reportCounter({name, value}: {
    name: any;
    value: any;
}): void;
export declare function reportCounters(counters: any): void;
export declare function trackComponents(appRef: ApplicationRef, ngZone: NgZone): void;
export declare function trackChangeDetection(appRef: ApplicationRef, ngZone: NgZone): void;
