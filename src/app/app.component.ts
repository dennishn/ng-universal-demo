import {Meta} from '@angular/platform-browser';
import {Component, OnInit} from '@angular/core'
import {TransferState} from '../modules/transfer-state/transfer-state';

@Component({
    selector: 'ngr-app',
    templateUrl: 'app.template.html'
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
