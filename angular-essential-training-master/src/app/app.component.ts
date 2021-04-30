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
}