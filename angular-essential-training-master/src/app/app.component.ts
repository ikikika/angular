import { Component} from '@angular/core'

@Component({
    selector: 'mw-app', // angular will look for this tag in index.html 
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css']
})
export class AppComponent {
    name = 'The redemption';
    wasWatched () {
      return true;
    }

    firstMediaItem = {
      id: 1,
      name: 'Firebug',
      medium: 'Series',
      category: 'Science Fiction',
      year: 2010,
      watchedOn: 1294166565384,
      isFavorite: false
    };

    onMediaItemDelete (mediaItem){

    }
}