import {NgModule} from '@angular/core';
import {Meta} from '@angular/platform-browser';
import {CommonModule} from '@angular/common';
import {RouterModule} from '@angular/router';

import {API} from '../../api/api.service';

import {StationBoardsView} from "./station-boards.component";
import {AppSharedModule} from "../../shared/shared.module";
// import {AppMaterialModule} from "../shared/material/material.module";

@NgModule({
    imports: [
        RouterModule.forChild([
            {
                path: '',
                component: StationBoardsView
            }
        ]),
        AppSharedModule
    ],
    declarations: [StationBoardsView],
    providers: [
        Meta,
        API
    ]
})
export class StationBoardsModule {
}
