import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {HttpModule} from '@angular/http';
import {ReactiveFormsModule} from '@angular/forms';
import {DateFormatterService} from "./date-formatter/date-formatter.service";

@NgModule({
    imports: [
        CommonModule,
        HttpModule,
        ReactiveFormsModule,
    ],
    declarations: [],
    exports: [
        CommonModule,
        HttpModule,
        ReactiveFormsModule,
    ],
    providers: [
        DateFormatterService
    ]
})
export class AppSharedModule {
}
