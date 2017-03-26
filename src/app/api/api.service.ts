import {Injectable} from "@angular/core";
import {Http, RequestOptions, Response, Headers} from "@angular/http";

import {Observable} from "rxjs/Observable";
import 'rxjs/add/observable/throw';
import 'rxjs/add/operator/catch';
import {TransferHttp} from "../../modules/transfer-http/transfer-http";

@Injectable()
export class API {
    private token = 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJleHAiOjE0OTA1NjY4NjcsInVzZXIiOnsiZW1haWwiOiJyZSswMDAxQG5vZGVzLmRrIiwiaWQiOjIsInBhc3N3b3JkIjoiJDJhJDEwJFdjTjVDaFpsazl1VWZnMXZZamQ4MGVBcjlEQy5mUGxaODcuczZrdWNXXC9QUnA2WWF6XC9cL3RTIn19.4ufUGh/CIONFwo+hCdEYMfui5Jg7qTqgfsz1OVZ8Vq4=';
    private baseUrl = 'https://bv-events.development-like.st/api';

    private defaultRequestParams = {};
    private defaultRequestHeaders = {
        'N-Meta': 'web;development',
        'Authorization': this.token
    };

    constructor(private http: TransferHttp) {}

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

    private request(url: string): Observable<Response> {
        const requestOpts = new RequestOptions({
            url: [this.baseUrl, url].join(''),
            search: Object.assign({}, this.defaultRequestParams),
            headers: new Headers(this.defaultRequestHeaders)
        });

        return this.http.request(url, requestOpts)
            .map(res => res)
            .catch(this.handleError);
    }

    public getStores(): Observable<Response> {
        return this.request(`/stores`);
    }
    public getStore(storeId: string): Observable<Response> {
        return this.request(`/stores/${storeId}`);
    }
}