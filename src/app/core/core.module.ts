import {NgModule, Optional, SkipSelf} from '@angular/core';
import {CommonModule} from '@angular/common';

@NgModule({
    imports: [CommonModule],
    declarations: [],
    exports: [],
    providers: []
})
export class AppCoreModule {
    constructor (@Optional() @SkipSelf() parentModule: AppCoreModule) {
        if (parentModule) {
            throw new Error(
                'AppCoreModule is already loaded. Import it in the AppModule only');
        }
    }
}
