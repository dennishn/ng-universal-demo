import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import {AppComponent} from './app.component';
import {AppModule} from './app.module';
import {BrowserTransferStateModule} from '../modules/transfer-state/browser-transfer-state.module';

@NgModule({
    bootstrap: [AppComponent],
    imports: [
        BrowserModule.withServerTransition({
            appId: 'ng-universal-demo'
        }),
        BrowserAnimationsModule,
        BrowserTransferStateModule,
        AppModule
    ]
})
export class BrowserAppModule {
}
