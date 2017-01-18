import {NgModule} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {BrowserModule} from '@angular/platform-browser';
import {AppComponent} from './app.component';
import {PanelTemplate} from "./template/container/painel.template";

@NgModule({
    imports: [BrowserModule, FormsModule],
    declarations: [AppComponent, PanelTemplate],
    bootstrap: [AppComponent]
})

export class AppModule {
}