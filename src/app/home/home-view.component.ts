import {Component, OnInit} from '@angular/core';
import {Observable} from 'rxjs/Observable';
import {API} from "../api/api.service";

@Component({
    selector: 'home-view',
    template: `
        <ul>
            <li *ngFor="let store of stores$ | async">
                <a [routerLink]="['stores', store.id]">{{store.name}}</a>
                ??? {{store | json}}            
            </li>
        </ul>
    `
})
export class HomeView implements OnInit {

    public stores$: Observable<any>;

    constructor(private api: API) {
    }

    ngOnInit() {
        this.stores$ = this.api.getStores().map(res => {
            return res['subscribedStores']['data'];
        });
    }
}
