import {Meta} from '@angular/platform-browser';
import {Component, OnInit} from '@angular/core'
import {TransferState} from '../modules/transfer-state/transfer-state';

@Component({
    selector: 'demo-app',
    template: `
        <h1 *shellRender>App is shell Rendered</h1>
        <h1 *shellNoRender>App is Fully Rendered</h1>
        <md-toolbar color="primary">Universal Demo</md-toolbar>  
        <router-outlet></router-outlet>
	`
})
export class AppComponent implements OnInit {
    constructor(private cache:TransferState, private meta: Meta) {}

    ngOnInit() {
        this.meta.addTag({
            name: 'og:title',
            property: 'DHNI Laver Awesome'
        });

        this.cache.set('cached', true);
    }
}
