import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {MaterialModule} from '@angular/material';
import {AppComponent} from './app.component';
import {AppModule} from './app.module';
import {BrowserTransferStateModule} from '../modules/transfer-state/browser-transfer-state.module';
import {AppMaterialModule} from './shared/material/material.module';
import { SwSandboxComponent } from './sw-sandbox/sw-sandbox.component';
import {AppShellModule} from '@angular/app-shell';

// import '../styles.scss';
import '../styles/styles.scss';

@NgModule({
    bootstrap: [AppComponent],
    imports: [
        BrowserModule.withServerTransition({
            appId: 'ng-universal-demo'
        }),
        // AppMaterialModule,
        BrowserTransferStateModule,
        AppModule,
        // AppShellModule.runtime()
    ]
})
export class BrowserAppModule {
}
