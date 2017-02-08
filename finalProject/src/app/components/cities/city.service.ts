import {Component} from '@angular/core';
import {cityType} from './city.interface';

export class CityService{
    cities:cityType[];
    constructor(){
        this.cities=[
            {name:"Fairfield"},
            {name:"Denver"},
            {name:"Dalus"}
        ];
    }
    getData(){
        return this.cities;
    }
}
