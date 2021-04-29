import { NgModule } from '@angular/core';
import {BrowserModule} from '@angular/platform-browser'
import {AppComponent} from './app.component'

@NgModule({
    imports:[ BrowserModule ], // bring in other angular modules that my module will need
    declarations: [ AppComponent ], // used to make components, directives and pipes available to your module that dun come from another module
    bootstrap: [ AppComponent ] // used for a root module and let Angular know which component or components will be the starting point for bootstrap process // entry point for app code
})
export class AppModule {}

