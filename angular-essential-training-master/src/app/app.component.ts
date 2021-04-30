import { Component} from '@angular/core'

@Component({
    selector: 'mw-app', // angular will look for this tag in index.html 
    templateUrl: './app.component.html',
    styles: [
        `
            h1 { color: #fff; }
            .description { color: yellow; }
        `,
        `
            .description2 { color: green }
        `
    ]
})
export class AppComponent {}