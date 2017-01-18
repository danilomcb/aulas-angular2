import {Component} from '@angular/core'
import {Config} from "./config.service";
import {Video} from "./video/video";

@Component({
    selector: 'my-app',
    templateUrl: 'app/app.component.html'
})

export class AppComponent {
    titulo = Config.TITULO;
}
