import {Component, OnInit} from '@angular/core';
import {Observable} from 'rxjs/Observable';
import {API} from "../api/api.service";

@Component({
    selector: 'home-view',
    template: `
        <!--<a [routerLink]="['boards', $location]">{{store.name}}</a>-->
        <!--<pre>{{$location | json}}</pre>            -->
    `
})
export class HomeView implements OnInit {

    public $location: Observable<any>;

    constructor(private api: API) {
    }

    ngOnInit() {
        this.$location = this.api.getLocation('Nivå').map(res => {
            return res['subscribedStores']['data'];
        });

        this.$location.subscribe(location => console.info('location', location));
    }
}
