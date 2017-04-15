import {NgModule} from '@angular/core';
import {Meta} from '@angular/platform-browser';
import {CommonModule} from '@angular/common';
import {RouterModule} from '@angular/router';

import {API} from '../api/api.service';
import {LocationsView} from "./locations.component";
import {AppMaterialModule} from "../shared/material/material.module";

@NgModule({
    imports: [
        CommonModule,
        RouterModule.forChild([
            {
                path: '',
                component: LocationsView
            }
        ]),
        AppMaterialModule
    ],
    declarations: [LocationsView],
    providers: [
        Meta,
        API
    ]
})
export class LocationsModule {
}
