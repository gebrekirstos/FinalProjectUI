import {Injectable} from '@angular/core';
import {Http} from '@angular/http';
import 'rxjs/add/operator/map';
@Injectable()
export class HttpTestService{
    constructor(private http:Http){

    }
    getCurrentTime(){
        return this.http.get("http://data.jsontest.com")
                .map(res=>res.json());
    }

}