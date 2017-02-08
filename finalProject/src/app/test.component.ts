import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms'
import { TestService } from "./test.service";
import { Router, ActivatedRoute } from "@angular/router";
import { Subscription } from "rxjs/Rx";

@Component({
    moduleId: module.id,
    selector: 'test',
    template: `<button (click)="onGetMyData()"> States </button>`
})
export class TestComponent {
    constructor(private httpService: TestService, router:Router) {
         this.httpService.getMyData('http://localhost:4000/api/getZipCodes').subscribe(
            response => {
                var userObject = response.json();
                console.log(userObject);
                // this.myForm.controls['name'].setValue(userObject.name, { onlySelf: true });
                // this.myForm.controls['email'].setValue(userObject.email, { onlySelf: true });
                // this.httpService.getMyData('https://jsonplaceholder.typicode.com/posts?userId=1').subscribe(
                //     innerResponse => {
                //         var firstPost = innerResponse.json()[0];
                //         this.myForm.controls['post'].setValue(firstPost.body);
                //     },
                //     innerError => console.log(innerError)
                // );
            },
            error => console.log(error)
        );
    }

}
