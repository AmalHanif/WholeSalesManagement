 import {Component } from '@angular/core';

 @Component({
   selector: 'about',
   templateUrl: './about.component.html',

 })
 export class AboutComponent   {
     name : string;

     constructor(){
       this.name = 'About';
     }

 }
