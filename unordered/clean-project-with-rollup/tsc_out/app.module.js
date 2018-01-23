import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { AppComponent } from "./app.component";
export class AppModule {
}
AppModule.decorators = [
    { type: NgModule, args: [{
                imports: [
                    BrowserModule,
                ],
                bootstrap: [
                    AppComponent
                ],
                declarations: [
                    AppComponent
                ]
            },] },
];
/** @nocollapse */
AppModule.ctorParameters = () => [];
//# sourceMappingURL=app.module.js.map