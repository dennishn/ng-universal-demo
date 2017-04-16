import {Component, OnInit} from '@angular/core';
import {Observable} from 'rxjs/Observable';
import {Subject} from 'rxjs/Subject';
import {API} from "../../api/api.service";

import 'rxjs/add/operator/debounceTime';
import 'rxjs/add/operator/distinctUntilChanged';
import 'rxjs/add/operator/switchMap';
import {ActivatedRoute} from "@angular/router";

@Component({
    selector: 'station-boards-view',
    templateUrl: 'station-boards.template.html',
    styleUrls: ['station-boards.scss']
})
export class StationBoardsView implements OnInit {

    $board: Observable<any>;

    constructor(private api: API, private route: ActivatedRoute) {
    }

    ngOnInit() {
        this.$board = this.api
            .getStationBoard(this.route.snapshot.paramMap.get('departureId'), new Date())
            .map((response) => response['DepartureBoard']['Departure']);

        // this.$board.subscribe(b => console.log('JAA', b), e => console.log('NEEJ', e));
    }
}

