"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require("@angular/core");
var racing_data_service_1 = require('./services/racing-data.service');
var CarPartsComponent = (function () {
    function CarPartsComponent(racingDataService) {
        this.racingDataService = racingDataService;
    }
    CarPartsComponent.prototype.ngOnInit = function () {
        this.getCarParts();
    };
    CarPartsComponent.prototype.getCarParts = function () {
        var _this = this;
        this.racingDataService
            .getCarParts()
            .subscribe(function (carParts) { return _this.carParts = carParts; });
    };
    CarPartsComponent.prototype.upQuantity = function (carPart) {
        var q = parseInt(carPart.quantity);
        q++;
        if (q <= carPart.inStock) {
            carPart.quantity = q;
        }
    };
    CarPartsComponent.prototype.downQuantity = function (carPart) {
        var q = parseInt(carPart.quantity);
        q--;
        if (q >= 0) {
            carPart.quantity = q;
        }
    };
    CarPartsComponent.prototype._checkQuantity = function (event, carPart) {
        /** NO FUNCIONA **/
        var pattern = /[0-9\+\ ]/;
        var inputChar = String.fromCharCode(event.charCode);
        var result = pattern.test(inputChar);
        var value = parseInt(event.target.value);
        console.log(value > carPart.inStock);
        if (!result || value > carPart.inStock || value < 0) {
            event.preventDefault();
        }
    };
    CarPartsComponent.prototype.totalCarParts = function () {
        var total = 0;
        if (Array.isArray(this.carParts)) {
            for (var _i = 0, _a = this.carParts; _i < _a.length; _i++) {
                var part = _a[_i];
                total += part.inStock;
            }
        }
        return total;
    };
    ;
    CarPartsComponent = __decorate([
        core_1.Component({
            selector: "car-parts",
            templateUrl: "app/templates/car-parts.component.html",
            styleUrls: []
        }), 
        __metadata('design:paramtypes', [racing_data_service_1.RacingDataService])
    ], CarPartsComponent);
    return CarPartsComponent;
}());
exports.CarPartsComponent = CarPartsComponent;
//# sourceMappingURL=car-parts.component.js.map