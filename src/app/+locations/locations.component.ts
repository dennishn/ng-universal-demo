import {Component, OnInit} from '@angular/core';
import {Observable} from 'rxjs/Observable';
import {Subject} from 'rxjs/Subject';
import {API} from "../api/api.service";

import 'rxjs/add/operator/debounceTime';
import 'rxjs/add/operator/distinctUntilChanged';
import 'rxjs/add/operator/switchMap';

@Component({
    selector: 'locations-view',
    templateUrl: 'locations.template.html',
    styleUrls: ['locations.scss']
})
export class LocationsView implements OnInit {

    public $locations: Observable<any>;

    private searchTermStream = new Subject<string>();

    constructor(private api: API) {
    }

    ngOnInit() {

        this.$locations = this.searchTermStream
            .debounceTime(300)
            .distinctUntilChanged()
            .switchMap((term: string) => {
                console.log('DO IT', term);
                return this.api.getLocation(term);
            });

        // this.$locations = this.api.getLocation('momomamamamomomo').map(res => {
        //     return res['LocationList']['StopLocation'];
        // });

        // this.$locations.subscribe(location => console.info('location', location));

        // this.api.test().subscribe(r => console.log('ja', r), e => console.log('nej', e));
    }

    public search(term: string) {
        console.log('SEARCH', term);
        this.searchTermStream.next(term);
    }
}

