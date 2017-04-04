import {NgModule} from '@angular/core';
import {BrowserModule, Meta} from '@angular/platform-browser';
import {MaterialModule} from '@angular/material';
import {AppShellModule} from '@angular/app-shell';
import {APP_BASE_HREF, CommonModule} from '@angular/common';
import {HttpModule} from '@angular/http';
import {RouterModule} from '@angular/router';
import {AppComponent} from './app.component';
import {HomeView} from './home/home-view.component';
import {TransferHttpModule} from '../modules/transfer-http/transfer-http.module';
import {API} from "./api/api.service";
import { SwSandboxComponent } from './sw-sandbox/sw-sandbox.component';


@NgModule({
    imports: [
        CommonModule,
        HttpModule,
        TransferHttpModule,
        RouterModule.forRoot([
            {path: '', component: HomeView, pathMatch: 'full'},
            {path: 'stores/:storeId', loadChildren: './+lazy/lazy.module#LazyModule'},
            {path: 'sw', component: SwSandboxComponent, pathMatch: 'full'}
        ]),
        MaterialModule,
        AppShellModule.runtime()
    ],
    providers: [Meta, API],
    declarations: [AppComponent, HomeView, SwSandboxComponent],
    exports: [AppComponent]
})
export class AppModule {
}
