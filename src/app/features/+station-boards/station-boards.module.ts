import {NgModule} from '@angular/core';
import {Meta} from '@angular/platform-browser';
import {RouterModule} from '@angular/router';

import {API} from '../../api/api.service';

import {StationBoardsView} from "./station-boards.component";
import {AppSharedModule} from "../../shared/shared.module";

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
