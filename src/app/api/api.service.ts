import {Injectable} from "@angular/core";
import {Http, RequestOptions, Response, Headers} from "@angular/http";

import {Observable} from "rxjs/Observable";
import 'rxjs/add/observable/throw';
import 'rxjs/add/operator/catch';
import {TransferHttp} from "../../modules/transfer-http/transfer-http";
import {DateFormatterService} from "../shared/date-formatter/date-formatter.service";

@Injectable()
export class API {
    private baseUrl = '/api';

    private defaultRequestParams = {
        format: 'json'
    };
    private defaultRequestHeaders = {};

    constructor(private http: TransferHttp, private dateFormatter: DateFormatterService) {
        console.log('APIs are great!', process.env, this.baseUrl);
    }

    private handleError(error: any) {
        console.error('API Error:', error);

        if(error instanceof Response) {
            return Observable.throw(error.json().error || 'Unknown Error');
            // if you're using lite-server, use the following line
            // instead of the line above:
            //return Observable.throw(err.text() || 'backend server error');
        }
        return Observable.throw(error || 'Unknown Error');
    }

    private request(url: string, params?: any): Observable<Response> {
        const requestOpts = new RequestOptions({
            url: [this.baseUrl, url].join(''),
            // url: url,
            search: Object.assign({}, this.defaultRequestParams, params || null),
            headers: new Headers(this.defaultRequestHeaders)
        });

        return this.http.request(url, requestOpts)
            .map(res => res)
            .catch(this.handleError);
    }

    public getLocation(input: string): Observable<Response> {
        console.log('wtf', input);
        return this.request(`/location`, {input: input});
    }
    public getStationBoard(id: string, date: Date): Observable<Response> {
        const formattedDate = this.dateFormatter.formatForApi(date);
        // const d = new Date();
        // const year = d.getFullYear().toString().substr(-2);
        // const month = ('0' + (d.getMonth() + 1)).slice(-2);
        // const day = ('0' + (d.getDay() + 1)).slice(-2);
        // const hour = d.getHours() + 1; // An hour from now
        // const minutes = d.getMinutes();
        
        return this.request(`/departureBoard`, {
            id: id,
            date: formattedDate.date,
            time: formattedDate.time
        });
    }
}
