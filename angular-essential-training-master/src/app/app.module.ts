import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser'
import { AppComponent } from './app.component'
import { MediaItemComponent } from './media-item.component'
import { MediaItemListComponent } from './media-item-list.component'
import { FavoriteDirective } from './favorite.directive'
import { CategoryListPipe } from './category-list.pipe'

@NgModule({
    imports: [ BrowserModule ], // bring in other angular modules that my module will need
    declarations: [ 
        AppComponent, 
        MediaItemComponent, 
        MediaItemListComponent,
        FavoriteDirective,
        CategoryListPipe
    ], // used to make components, directives and pipes available to your module that dun come from another module
    bootstrap: [ AppComponent ] // used for a root module and let Angular know which component or components will be the starting point for bootstrap process // entry point for app code
})
export class AppModule {}

