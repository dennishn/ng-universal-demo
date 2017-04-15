import {NgModule} from '@angular/core';
import {
    MdListModule,
    MdToolbarModule,
    MdInputModule
} from '@angular/material';

@NgModule({
    imports: [
        MdToolbarModule,
        MdListModule,
        MdInputModule
    ],
    exports: [
        MdToolbarModule,
        MdListModule,
        MdInputModule
    ]
})
export class AppMaterialModule {}