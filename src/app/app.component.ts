import {Meta} from '@angular/platform-browser';
import {Component, OnInit} from '@angular/core'
import {TransferState} from '../modules/transfer-state/transfer-state';

@Component({
    selector: 'demo-app',
    template: `
        <h1>Universal Demo</h1>        
        <router-outlet></router-outlet>
	`,
    styles: [
        `h1 {
            color: green;
        }`
    ]
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
