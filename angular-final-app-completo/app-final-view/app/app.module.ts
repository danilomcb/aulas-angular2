/**
 * Created by danilo-barros on 19/01/17.
 */

import {NgModule} from "@angular/core";
import {BrowserModule} from "@angular/platform-browser";
import {AppComponent} from "./app.component";
import {CoreModule} from "./core/core.module";
import {UsuarioModule} from "./usuario/usuario.module";

@NgModule({
    imports: [BrowserModule, CoreModule, UsuarioModule],
    declarations: [AppComponent],
    bootstrap: [AppComponent]
})
export class AppModule {}