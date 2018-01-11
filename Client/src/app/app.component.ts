import { Component } from '@angular/core';

@Component({
  selector: 'my-app',
  template: `
      <ul>
        <button><a routerLink="/">Home</a></button>
        <button><a routerLink="/about">about</a></button>
        <button><a routerLink="/login">Login/SignUp</a></button>
      </ul>
      <hr/>
      <router-outlet></router-outlet>
  `,
})
export class AppComponent  {}
