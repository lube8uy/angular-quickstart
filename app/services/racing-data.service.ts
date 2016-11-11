import { Injectable } from '@angular/core';
import { Headers, Http } from '@angular/http';
import 'rxjs/add/operator/map';
import { CarPart } from '../models/car-part';

@Injectable()
export class RacingDataService {

	private headers = new Headers({'Content-Type': 'application/json'});
  	private carPartsUrl = "/app/data/car-parts.json";  // URL to web api

	constructor(private http: Http) {

	}

	getCarParts() {
		return this.http.get(this.carPartsUrl)
               .map(response => <CarPart[]>response.json().data);
	}
}