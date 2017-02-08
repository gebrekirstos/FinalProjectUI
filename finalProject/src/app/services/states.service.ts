import {Injectable} from '@angular/core';
import {Http, Headers, Response} from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class StateService{
    constructor(private http:Http){
        console.log("Service Initialized....");
    }
    getZips(){
        return this.http.get('http://localhost:4000/api/getStates')
        .map(res=>res.json());
    }

    getcities(state:string){
        return this.http.get('http://localhost:4000/api/:'+state).map(res=>res.json);

    }
}
