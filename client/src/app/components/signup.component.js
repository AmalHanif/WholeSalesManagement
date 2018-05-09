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
var posts_service_1 = require("../services/posts.service");
var SignInComponent = (function () {
    function SignInComponent(postsService) {
        var _this = this;
        this.postsService = postsService;
        this.postsService.getData().subscribe(function (data) {
            _this.datadb = data;
        });
    }
    SignInComponent.prototype.userData = function (event) {
        var _this = this;
        event.preventDefault();
        var userInfo = {
            first_name: this.first_name,
            last_name: this.last_name,
            email: this.email,
            password: this.password,
            shop_name: this.shop_name,
            dob: this.dob
        };
        console.log(userInfo);
        this.postsService.addData(userInfo)
            .subscribe(function (data) {
            _this.datadb.push(data);
            // this.first_name ='';
            // this.last_name ='';
            // this.email ='';
            // this.shopName = '';
        });
    };
    return SignInComponent;
}());
SignInComponent = __decorate([
    core_1.Component({
        selector: 'signup',
        templateUrl: './signup.component.html',
        providers: [posts_service_1.PostsService]
    }),
    __metadata("design:paramtypes", [posts_service_1.PostsService])
], SignInComponent);
exports.SignInComponent = SignInComponent;
//# sourceMappingURL=signup.component.js.map