import { Component } from '@angular/core';

import { Auth } from './services/auth.service';
import { TestService } from './test.service';
import { TestComponent } from './test.component';
import { StateService } from './services/states.service';
import {Http, Headers, Response} from '@angular/http';
@Component({
  moduleId: module.id,
  selector: 'my-app',
  templateUrl: 'app.component.html',
})
export class AppComponent {
  states:any;
  constructor(private auth: Auth, private ss:StateService) {
     this.ss.getZips().subscribe((res)=>{this.states=res; console.log(this.states)});
  }
}
