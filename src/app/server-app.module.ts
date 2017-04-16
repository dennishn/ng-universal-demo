import {NgModule} from '@angular/core';
import {AppShellModule} from '@angular/app-shell';
import {ServerModule} from '@angular/platform-server';
import {NoopAnimationsModule} from "@angular/platform-browser/animations";
import {ServerTransferStateModule} from '../modules/transfer-state/server-transfer-state.module';
import {AppComponent} from './app.component';
import {AppModule} from './app.module';
import {TransferState} from '../modules/transfer-state/transfer-state';
import {BrowserModule} from '@angular/platform-browser';

@NgModule({
    bootstrap: [AppComponent],
    imports: [
        BrowserModule.withServerTransition({
            appId: 'ng-universal-demo'
        }),
        ServerModule,
        NoopAnimationsModule,
        ServerTransferStateModule,
        AppModule,
        AppShellModule.prerender()
    ]
})
export class ServerAppModule {

    constructor(private transferState:TransferState) {
    }

    // Gotcha
    ngOnBootstrap = () => {
        this.transferState.inject();
    }
}
