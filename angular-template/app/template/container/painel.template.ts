/**
 * Created by danilo-barros on 18/01/17.
 */

import {Component, OnInit, Input} from '@angular/core';

@Component({
    selector: 'panel',
    templateUrl: 'app/template/container/panel.template.html'
})

export class PanelTemplate {
    @Input() titulo;

}