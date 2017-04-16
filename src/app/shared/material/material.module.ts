import {NgModule} from '@angular/core';
import {
    MdListModule,
    MdToolbarModule,
    MdInputModule, MdCardModule
} from '@angular/material';

@NgModule({
    imports: [
        MdToolbarModule,
        MdListModule,
        MdInputModule,
        MdCardModule
    ],
    exports: [
        MdToolbarModule,
        MdListModule,
        MdInputModule,
        MdCardModule
    ]
})
export class AppMaterialModule {}