import { NgModule} from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {HttpModule} from '@angular/http';

import { routing, appRoutingProviders } from './app.routing';
import { AppComponent } from './app.component';

import { AUTH_PROVIDERS } from 'angular2-jwt';
// import {ROUTER_PROVIDERS} from '@angular/router';
// import {HTTP_PROVIDERS} from '@angular/http'
import { HomeComponent } from './components/home/home.component';
import { ProfileComponent } from './components/profile/profile.component';
import { Auth } from './services/auth.service';

import { CityService } from './components/cities/city.service'
import { CityComponent } from './components/cities/city.component'

import { StateService } from './services/states.service';
import { StateComponent } from './components/states/state.component'

import { TestService } from './test.service';
import { TestComponent } from './test.component';

import { HttpTestComponent } from './http-test.component';
@NgModule({
  imports: [BrowserModule, routing, HttpModule],
  declarations: [AppComponent, HomeComponent, ProfileComponent, CityComponent, StateComponent, TestComponent, HttpTestComponent],
  bootstrap: [AppComponent],
  providers: [appRoutingProviders, AUTH_PROVIDERS, Auth, CityService, StateService, TestService]
})
export class AppModule { }
