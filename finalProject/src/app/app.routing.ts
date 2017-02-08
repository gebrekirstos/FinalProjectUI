import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './components/home/home.component';
import { ProfileComponent } from './components/profile/profile.component';
import { CityComponent } from './components/cities/city.component';

import { StateComponent } from './components/states/state.component';
import {TestComponent} from './test.component'

const appRoutes: Routes = [{
    path: '',
    component: HomeComponent
},
{
    path: 'profile',
    component: ProfileComponent
},
{
    path: 'cities/:state',
    component: CityComponent
},
{
    path: 'states2',
    component: StateComponent
},
{
    path: 'test',
    component: TestComponent
}

];
export const appRoutingProviders: any[] = [];
export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);
