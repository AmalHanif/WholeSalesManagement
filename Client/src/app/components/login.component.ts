import {Component } from '@angular/core';
import { PostsService } from '../services/posts.service';

@Component({
  selector: 'login',
  templateUrl: './login.component.html',
  providers: [PostsService ]
})
export class LoginComponent   {
  name : string;
  email:string;
  password:string;
  datadb:String[];

  constructor(private postsService: PostsService){
    this.postsService.getData().subscribe(data =>{
      this.datadb= data;
    });
  }

  userData(event: MouseEvent): any{
    event.preventDefault();
    var userInfo:any = {
      name:this.name,
      email:this.email,
      password:this.password
    }
    console.log(userInfo);
    this.postsService.addData(userInfo)
    .subscribe((data: string): any =>{
        this.datadb.push(data);
        // this.first_name ='';
        // this.last_name ='';
        // this.email ='';
        // this.shopName = '';
    });
  }
}