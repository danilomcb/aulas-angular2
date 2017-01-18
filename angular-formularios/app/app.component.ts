import {Component} from '@angular/core'
import {Config} from "./config.service";
import {Mock} from "./model/mock";
import {Pessoa} from "./model/model";


@Component({
    selector: 'my-app',
    templateUrl: 'app/app.component.html',
    providers: [Mock]
})

export class AppComponent {
    titulo = Config.TITULO;
    usuario: Pessoa;
    formularioSubmetido: boolean = false;

    constructor(usuarioMock: Mock) {
        this.usuario = usuarioMock.fulano;
    }

    onSubmit(form) {
        this.formularioSubmetido = true;
        console.log(JSON.stringify(this.usuario))
    }
}

