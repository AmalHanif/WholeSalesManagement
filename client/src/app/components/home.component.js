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
var HomeComponent = (function () {
    function HomeComponent(postsService) {
        var _this = this;
        this.postsService = postsService;
        this.name = 'Angular2';
        this.email = 'angular2@gmail.com';
        // this.card = {
        //   cardNum: '4242424242424242',
        //   cvc: '123',
        //   expiryMonth:'12',
        //   expiryYear:'20',
        // }
        this.hobbies = ['drawing', 'Reading', 'sports'];
        this.showHobbies = false;
        this.tasks = ['work', 'study', 'exam preparations'];
        this.showTask = true;
        this.todo = 'Text written below';
        this.postsService.getData().subscribe(function (data) {
            _this.datadb = data;
        });
    }
    HomeComponent.prototype.addData = function (event) {
        var _this = this;
        event.preventDefault();
        var newData = {
            name: this.name,
            email: this.email,
            country: this.country,
            cardNumber: this.cardNumber,
            expiryMonth: this.expiryMonth,
            expiryYear: this.expiryYear,
            cvc: this.cvc
        };
        console.log(newData);
        this.postsService.addData(newData)
            .subscribe(function (data) {
            _this.datadb.push(data);
            _this.name = '';
            _this.email = '';
            _this.country = '';
        });
    };
    HomeComponent.prototype.toggleTask = function () {
        if (this.showTask == true) {
            this.showTask = false;
        }
        else {
            this.showTask = true;
        }
    };
    HomeComponent.prototype.toggleHobbies = function () {
        if (this.showHobbies == true) {
            this.showHobbies = false;
        }
        else {
            this.showHobbies = true;
        }
    };
    HomeComponent.prototype.addTask = function (Newtask) {
        this.tasks.push(Newtask);
    };
    HomeComponent.prototype.addHobby = function (hobby) {
        this.hobbies.push(hobby);
    };
    HomeComponent.prototype.deleteHobby = function (i) {
        this.hobbies.splice(i, 1);
    };
    return HomeComponent;
}());
HomeComponent = __decorate([
    core_1.Component({
        moduleId: module.id,
        selector: 'home',
        templateUrl: "./home.component.html",
        providers: [posts_service_1.PostsService]
    }),
    __metadata("design:paramtypes", [posts_service_1.PostsService])
], HomeComponent);
exports.HomeComponent = HomeComponent;
// interface Data{
//    name:string;
//    email: string;
//    area: string;
//   }
//# sourceMappingURL=home.component.js.map