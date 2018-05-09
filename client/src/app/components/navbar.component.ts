import {Component } from '@angular/core';

 @Component({
    moduleId: module.id,
    selector: 'navbar',
    templateUrl: './navbar.component.html',

 })
 export class NavbarComponent   {
     name : string;

     constructor(){
       this.name = 'WholeSales Management System';
     }

 }