import {NgModule} from '@angular/core';
import {BrowserModule, Meta} from '@angular/platform-browser';
// import {MaterialModule} from '@angular/material';
import {AppShellModule} from '@angular/app-shell';
import {APP_BASE_HREF, CommonModule} from '@angular/common';
import {HttpModule} from '@angular/http';
import {RouterModule} from '@angular/router';
import {AppComponent} from './app.component';
import {AppMaterialModule} from './shared/material/material.module';
import {TransferHttpModule} from '../modules/transfer-http/transfer-http.module';
import {API} from "./api/api.service";
import { SwSandboxComponent } from './sw-sandbox/sw-sandbox.component';
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";

@NgModule({
    imports: [
        CommonModule,
        HttpModule,
        TransferHttpModule,
        RouterModule.forRoot([
            {
                path: '',
                pathMatch: 'full',
                loadChildren: './+locations/locations.module#LocationsModule'
            },
            {
                path: '',
                loadChildren: './+locations/locations.module#LocationsModule'
            }
            // {path: '', component: HomeView, pathMatch: 'full'},
            // {path: 'boards/:boardId', loadChildren: './+lazy/lazy.module#LazyModule'},
            // {path: 'sw', component: SwSandboxComponent, pathMatch: 'full'}
        ]),
        AppMaterialModule,
        BrowserAnimationsModule,
        // MaterialModule,
        AppShellModule.runtime()
    ],
    providers: [Meta, API],
    declarations: [AppComponent, SwSandboxComponent],
    exports: [AppComponent]
})
export class AppModule {
}
