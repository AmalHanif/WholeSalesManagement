import { Component,OnInit } from '@angular/core';
// import { UserService } from '../services/user.service';

@Component({
    moduleId: module.id,
    selector: 'home',
    templateUrl: `./home.component.html`,
})

export class HomeComponent  {
    
  name = 'anony';
  
    constructor() { } 
  
    // ngOnInit() {
    //     this.name = this.user.username;
    //     console.log('Is user logged in? ', this.user.getUserLoggedIn())
    // }
  
}