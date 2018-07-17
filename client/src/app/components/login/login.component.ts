import {Component } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from '../../services/user.service';

@Component({
  selector: 'login',
  templateUrl: './login.component.html',
  providers: [UserService ]
})
export class LoginComponent   {
  username:string;
  password:string;
  datadb:String[];

  constructor(private router:Router,private user: UserService){
    // this.postsService.getData().subscribe(data =>{
    //   this.datadb= data;
    // });
  }
  ngOnInit() {
    console.log('hit');
  }
  userData(event: MouseEvent): any{
    event.preventDefault();
    var userInfo:any = {
      username:this.username,
      password:this.password 
    }
    console.log(userInfo);
    if(this.username=="admin"&& this.password=="admin123"){
      this.user.setUserLoggedIn();
      this.router.navigate(['/home']);
    }
    // this.postsService.findData(userInfo)
    // .subscribe((data: string): any =>{
    //     this.datadb.push(data);
    //     // this.first_name ='';
    //     // this.last_name ='';
    //     // this.email ='';
    //     // this.shopName = '';
    // });
  }
}