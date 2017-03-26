import {Meta} from '@angular/platform-browser';
import {APP_BASE_HREF, CommonModule} from '@angular/common';
import {NgModule, Component, OnInit} from '@angular/core';
import {RouterModule, ActivatedRoute, Params} from '@angular/router';
import {API} from "../api/api.service";

import {Observable} from 'rxjs/Observable';
import 'rxjs/add/operator/switchMap';

@Component({
    selector: 'lazy-view',
    template: `<pre>{{store$ | async | json}}</pre>`
})
export class LazyView implements OnInit {

    public store$: Observable<any>;

    constructor(private meta: Meta, private api: API, private route: ActivatedRoute) {}

    ngOnInit() {

        this.store$ = this.route.params
            .switchMap((params: Params) => this.api.getStore(params['storeId']));

        this.store$.subscribe(store => {
            this.meta.addTag({
                name: 'og:image',
                property: store['coverImageUrl']
            });
        });
            // .subscribe(res => console.log('JAA'));
            // .subscribe((hero: Hero) => this.hero = hero);

        // this.store$ = this.api.getStore(this.route.params['storeId']);
        // this.meta.addTag({
        //     name: 'og:image'
        // })
    }
}

@NgModule({
    declarations: [LazyView],
    imports: [
        CommonModule,
        RouterModule.forChild([
            {path: '', component: LazyView, pathMatch: 'full'}
        ])
    ],
    providers: [Meta, API]
})
export class LazyModule {

}
