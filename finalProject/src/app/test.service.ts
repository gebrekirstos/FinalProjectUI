import {Injectable} from "@angular/core";
import {Http, Response} from "@angular/http";
import {Observable} from "rxjs";
import { ActivatedRoute } from "@angular/router";
import { Subscription } from "rxjs/Rx";
import 'rxjs/add/operator/map';



@Injectable()
export class TestService {
  constructor(public http : Http) {

  }
  getMyData(url : string) : Observable<Response> {
    return this.http.get(url);
  }
}
