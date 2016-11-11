import { Component } from "@angular/core";
import { CarPart } from './models/car-part';
import { RacingDataService } from './services/racing-data.service';

@Component({
	selector: "car-parts",
	templateUrl: "app/templates/car-parts.component.html",
	styleUrls: []
})

export class CarPartsComponent {

	carParts: CarPart[];

	constructor(private racingDataService: RacingDataService) {

	}

	ngOnInit() {
		this.getCarParts();
	}

	getCarParts(): void {
		this.racingDataService
			.getCarParts()
			.subscribe(carParts => this.carParts = carParts);
	}

	upQuantity(carPart) {
		let q = parseInt(carPart.quantity);
		q++;
		if (q <= carPart.inStock) {
			carPart.quantity = q;
		}
	}

	downQuantity(carPart) {
		let q = parseInt(carPart.quantity);
		q--;
		if (q >= 0) {
			carPart.quantity = q;
		}
	}

	_checkQuantity(event, carPart) {
		/** NO FUNCIONA **/
	    const pattern = /[0-9\+\ ]/;
	    let inputChar = String.fromCharCode(event.charCode);
	    let result = pattern.test(inputChar);
	    let value = parseInt(event.target.value);
	    console.log(value > carPart.inStock);
	    if (!result || value > carPart.inStock || value < 0) {
	      event.preventDefault();
	    }
	}

	totalCarParts() {
		let total = 0;
			if (Array.isArray(this.carParts)) {
			for (let part of this.carParts) {
				total += part.inStock;
			}
		}
		return total;
	};
}


