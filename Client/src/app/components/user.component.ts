import { Component } from '@angular/core';
import { PostsService } from '../services/posts.service';
@Component({
    moduleId: module.id,
    selector: 'user',
    templateUrl: `user.component.html`,
    providers: [PostsService ]
})

export class UserComponent  {
  name : string;
  email : string;
  password: string;
  cus_id : string;

  cardNumber: string;
  expiryMonth: string;
  expiryYear:string;
  cvc: string;

  hobbies : String[];
  showHobbies: boolean;
  tasks: String[];
  showTask: boolean;
  todo: string;
  datadb:String[];



  constructor(private postsService: PostsService){
    this.name = 'Angular2';
    this.email = 'angular2@gmail.com';
    // this.card = {
    //   cardNum: '4242424242424242',
    //   cvc: '123',
    //   expiryMonth:'12',
    //   expiryYear:'20',
    // }

    this.hobbies = ['drawing', 'chat', 'sports'];
    this.showHobbies= false;
    this.tasks = ['work', 'study', 'exam preparations']
    this.showTask= true;
    this.todo ='Text written below'
    this.postsService.getData().subscribe(data =>{
      this.datadb= data;
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

  toggleTask(){
    if(this.showTask == true){
        this.showTask = false;
    } else{
      this.showTask = true;
    }
  }
  toggleHobbies(){
      if(this.showHobbies == true){
          this.showHobbies = false;
      } else{
        this.showHobbies = true;
      }
    }
    addTask(Newtask: string): any{
      this.tasks.push(Newtask);
    }
    addHobby(hobby: string): any{
      this.hobbies.push(hobby);
    }
    deleteHobby(i: number): any{
      this.hobbies.splice(i,1);
    }
  }

// interface Data{
//    name:string;
//    email: string;
//    area: string;
//   }
