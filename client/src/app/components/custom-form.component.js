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
// import { REACTIVE_FORM_DIRECTIVES } from '@angular/forms';
var getToken_service_1 = require("../services/getToken.service");
var CustomFormComponent = (function () {
    function CustomFormComponent(getTokenService) {
        var _this = this;
        this.getTokenService = getTokenService;
        this.getTokenService.getData().subscribe(function (data) {
            _this.datadb = data;
        });
    }
    CustomFormComponent.prototype.getToken = function (event) {
        var _this = this;
        this.message = 'Loading...';
        window.Stripe.card.createToken({
            name: this.name,
            number: this.cardNumber,
            exp_month: this.expiryMonth,
            exp_year: this.expiryYear,
            cvc: this.cvc
        }, function (status, response) {
            if (status === 200) {
                _this.message = "Success! Card token " + response.card.id + ".";
                console.log(_this.message);
                _this.getTokenService.getToken(response)
                    .subscribe(function (data) {
                    _this.datadb.push(data);
                    console.log('token data of datadb');
                    console.log(data);
                });
            }
            else {
                _this.message = response.error.message;
            }
        });
    };
    return CustomFormComponent;
}());
CustomFormComponent = __decorate([
    core_1.Component({
        moduleId: module.id,
        selector: 'sd-custom-form',
        templateUrl: 'custom-form.component.html',
        // styleUrls: ['custom-form.component.css'],
        // directives: [REACTIVE_FORM_DIRECTIVES]
        providers: [getToken_service_1.GetTokenService]
    }),
    __metadata("design:paramtypes", [getToken_service_1.GetTokenService])
], CustomFormComponent);
exports.CustomFormComponent = CustomFormComponent;
//# sourceMappingURL=custom-form.component.js.map