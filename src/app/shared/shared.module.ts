import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {HttpModule} from '@angular/http';
import {ReactiveFormsModule} from '@angular/forms';
import {AppMaterialModule} from "./material/material.module";
import {DateFormatterService} from "./date-formatter/date-formatter.service";

@NgModule({
    imports: [
        CommonModule,
        HttpModule,
        ReactiveFormsModule,
        AppMaterialModule
    ],
    declarations: [],
    exports: [
        CommonModule,
        HttpModule,
        ReactiveFormsModule,
        AppMaterialModule
    ],
    providers: [
        DateFormatterService
    ]
})
export class AppSharedModule {
}
