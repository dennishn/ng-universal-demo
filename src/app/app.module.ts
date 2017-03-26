import {NgModule} from '@angular/core';
import {BrowserModule, Meta} from '@angular/platform-browser';
import {APP_BASE_HREF, CommonModule} from '@angular/common';
import {HttpModule} from '@angular/http';
import {RouterModule} from '@angular/router';
import {AppComponent} from './app.component';
import {HomeView} from './home/home-view.component';
import {TransferHttpModule} from '../modules/transfer-http/transfer-http.module';
import {API} from "./api/api.service";


@NgModule({
    imports: [
        CommonModule,
        HttpModule,
        TransferHttpModule,
        RouterModule.forRoot([
            {path: '', component: HomeView, pathMatch: 'full'},
            {path: 'stores/:storeId', loadChildren: './+lazy/lazy.module#LazyModule'}
        ])
    ],
    providers: [Meta, API],
    declarations: [AppComponent, HomeView],
    exports: [AppComponent]
})
export class AppModule {
}
