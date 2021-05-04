import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser'
import { ReactiveFormsModule } from '@angular/forms'
import { AppComponent } from './app.component'
import { MediaItemComponent } from './media-item.component'
import { MediaItemListComponent } from './media-item-list.component'
import { FavoriteDirective } from './favorite.directive'
import { CategoryListPipe } from './category-list.pipe'
import { MediaItemFormComponent } from './media-item-form.component';
import { MediaItemService } from './media-item.service';


@NgModule({
    imports: [ 
        BrowserModule,
        ReactiveFormsModule 
    ], // bring in other angular modules that my module will need
    declarations: [ 
        AppComponent, 
        MediaItemFormComponent,
        MediaItemComponent, 
        MediaItemListComponent,
        FavoriteDirective,
        CategoryListPipe
    ], // used to make components, directives and pipes available to your module that dun come from another module
    bootstrap: [ AppComponent ], // used for a root module and let Angular know which component or components will be the starting point for bootstrap process // entry point for app code
    providers: [
        MediaItemService
    ]
})
export class AppModule {}

