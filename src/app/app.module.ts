import {NgModule} from '@angular/core';
import {Meta} from '@angular/platform-browser';
import {RouterModule} from '@angular/router';
import {AppShellModule} from "@angular/app-shell";

import {TransferHttpModule} from '../modules/transfer-http/transfer-http.module';

import '../styles/styles.scss';

/*
    Core App Modules
 */
import {AppCoreModule} from "./core/core.module";
import {AppSharedModule} from "./shared/shared.module";
import {AppComponent} from './app.component';

/*
    Backend Integration
 */
import {API} from "./api/api.service";

/*
    Feature Components
 */
import {SwSandboxComponent} from './features/sw-sandbox/sw-sandbox.component';
import {AppShellComponent} from "./app-shell/app-shell.component";

@NgModule({
    imports: [
        TransferHttpModule,
        RouterModule.forRoot([
            {
                path: '',
                pathMatch: 'full',
                loadChildren: './features/+locations/locations.module#LocationsModule'
            },
            {
                path: '',
                loadChildren: './features/+locations/locations.module#LocationsModule'
            },
            {
                path: 'boards/:departureId',
                loadChildren: './features/+station-boards/station-boards.module#StationBoardsModule'
            }
            // {path: '', component: HomeView, pathMatch: 'full'},
            // {path: 'boards/:boardId', loadChildren: './+lazy/lazy.module#LazyModule'},
            // {path: 'sw', component: SwSandboxComponent, pathMatch: 'full'}
        ]),
        AppCoreModule,
        AppShellModule.runtime(),
        AppSharedModule
    ],
    providers: [Meta, API],
    declarations: [
        AppComponent,
        AppShellComponent,
        SwSandboxComponent
    ],
    exports: [AppComponent]
})
export class AppModule {
}
