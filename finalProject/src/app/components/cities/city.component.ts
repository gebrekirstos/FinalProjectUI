
import { Component, OnInit } from '@angular/core';
import { CityService } from './city.service';
import { cityType } from './city.interface';
@Component({
    moduleId: module.id,
    selector: 'cities',
    templateUrl: 'city.component.html'

})
export class CityComponent implements OnInit {
    cities: cityType[];
    constructor(private cs: CityService) {

    }

    ngOnInit() {
        this.cities = this.cs.getData();
    }
}