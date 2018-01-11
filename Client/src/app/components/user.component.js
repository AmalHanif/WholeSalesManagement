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
var UserComponent = (function () {
    function UserComponent(postsService) {
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
        this.hobbies = ['drawing', 'chat', 'sports'];
        this.showHobbies = false;
        this.tasks = ['work', 'study', 'exam preparations'];
        this.showTask = true;
        this.todo = 'Text written below';
        this.postsService.getData().subscribe(function (data) {
            _this.datadb = data;
        });
    }
    // addData(event: MouseEvent): any{
    //   event.preventDefault();
    //   var newData:any = {
    //     name:this.name,
    //     email:this.email,
    //     password:this.password,
    //
    //     console.log(newData);
    //   this.postsService.addData(newData)
    //   .subscribe((data: string): any =>{
    //       this.datadb.push(data);
    //       this.name ='';
    //       this.email ='';
    //       this.password = '';
    //   });
    // }
    UserComponent.prototype.toggleTask = function () {
        if (this.showTask == true) {
            this.showTask = false;
        }
        else {
            this.showTask = true;
        }
    };
    UserComponent.prototype.toggleHobbies = function () {
        if (this.showHobbies == true) {
            this.showHobbies = false;
        }
        else {
            this.showHobbies = true;
        }
    };
    UserComponent.prototype.addTask = function (Newtask) {
        this.tasks.push(Newtask);
    };
    UserComponent.prototype.addHobby = function (hobby) {
        this.hobbies.push(hobby);
    };
    UserComponent.prototype.deleteHobby = function (i) {
        this.hobbies.splice(i, 1);
    };
    return UserComponent;
}());
UserComponent = __decorate([
    core_1.Component({
        moduleId: module.id,
        selector: 'user',
        templateUrl: "user.component.html",
        providers: [posts_service_1.PostsService]
    }),
    __metadata("design:paramtypes", [posts_service_1.PostsService])
], UserComponent);
exports.UserComponent = UserComponent;
// interface Data{
//    name:string;
//    email: string;
//    area: string;
//   }
//# sourceMappingURL=user.component.js.map