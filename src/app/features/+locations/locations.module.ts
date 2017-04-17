import {NgModule} from '@angular/core';
import {Meta} from '@angular/platform-browser';
import {RouterModule} from '@angular/router';

import {API} from '../../api/api.service';

import {LocationsView} from "./locations.component";
import {AppSharedModule} from "../../shared/shared.module";

@NgModule({
    imports: [
        RouterModule.forChild([
            {
                path: '',
                component: LocationsView
            }
        ]),
        AppSharedModule
    ],
    declarations: [LocationsView],
    providers: [
        Meta,
        API
    ]
})
export class LocationsModule {
}
