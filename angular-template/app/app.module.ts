import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {AppComponent} from './app.component';
import {PanelTemplate} from "./template/container/painel.template";

@NgModule({
    imports: [BrowserModule],
    declarations: [AppComponent, PanelTemplate],
    bootstrap: [AppComponent]
})

export class AppModule {
}