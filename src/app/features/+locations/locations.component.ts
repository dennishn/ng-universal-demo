import {Component, OnInit} from '@angular/core';
import {Observable} from 'rxjs/Observable';
import {Subject} from 'rxjs/Subject';
import {API} from "../../api/api.service";

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

    public isLoading: boolean = false;

    private searchTermStream = new Subject<string>();

    constructor(private api: API) {
    }

    ngOnInit() {

        this.$locations = this.searchTermStream
            .debounceTime(300)
            .distinctUntilChanged()
            .switchMap((term: string) => {
                this.isLoading = true;
                return this.api.getLocation(term);
            })
            .map((results) => {
                this.isLoading = false;
                return results['LocationList']['StopLocation'];
            });
    }

    public search(term: string) {
        this.searchTermStream.next(term);
    }
}

