/**
 * Created by danilo-barros on 19/01/17.
 */
import {NgModule, Optional, SkipSelf} from '@angular/core';
import {CommonModule} from "@angular/common";

import {throwIfAlreadyLoaded} from "./module-import-guard";
import {NavRightComponent} from "./nav/nav-right.component";
import {NavTopComponent} from "./nav/nav-top.component";

@NgModule({
    imports: [CommonModule],
    exports: [NavRightComponent, NavTopComponent],
    declarations: [NavRightComponent, NavTopComponent],
    providers: [],
})
export class CoreModule {

    constructor(@Optional() @SkipSelf() parentModule: CoreModule) {
        throwIfAlreadyLoaded(parentModule, 'CoreModule');
    }
}
