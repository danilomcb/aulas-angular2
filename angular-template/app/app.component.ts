import {Component} from '@angular/core'
import {Config} from "./config.service";

@Component({
    selector: 'my-app',
    templateUrl: 'app/app.component.html'
})

export class AppComponent {
    titulo = Config.TITULO;
}
