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
var LoginComponent = (function () {
    function LoginComponent(postsService) {
        var _this = this;
        this.postsService = postsService;
        this.postsService.getData().subscribe(function (data) {
            _this.datadb = data;
        });
    }
    LoginComponent.prototype.userData = function (event) {
        var _this = this;
        event.preventDefault();
        var userInfo = {
            name: this.name,
            email: this.email,
            password: this.password
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
    return LoginComponent;
}());
LoginComponent = __decorate([
    core_1.Component({
        selector: 'login',
        templateUrl: './login.component.html',
        providers: [posts_service_1.PostsService]
    }),
    __metadata("design:paramtypes", [posts_service_1.PostsService])
], LoginComponent);
exports.LoginComponent = LoginComponent;
//# sourceMappingURL=login.component.js.map