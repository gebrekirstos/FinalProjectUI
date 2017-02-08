import { Component } from '@angular/core';
import {HttpTestService} from './http-test.service';
@Component({
  moduleId: module.id,
  selector: 'http-test',
  template:`
        <button (click)="onTestGet()"> Wanted </button>
        <p> Output: {{getData}} </p>
        <button> Offer </button>
        <p> Output {{postData}} </p>
  `,
  providers:[HttpTestService]
})
export class HttpTestComponent {
    getData:string;
    postData:string;

    constructor(private _httpService:HttpTestService){

    }
    onTestGet(){
        this._httpService.getCurrentTime()
        .subscribe(data=>this.getData=JSON.stringify(data), error=>alert(error),
        ()=>console.log("finished!"));
    }

}
