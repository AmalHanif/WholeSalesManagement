import { Component } from '@angular/core';
import { EditableTableService } from 'ng-editable-table/editable-table/editable-table.service';

@Component({
  moduleId: module.id,
  selector: 'stock',
  templateUrl: './stock.component.html',
  // styleUrls: ['stripe-form.component.css']
})
export class StockComponent {
  name : string;
  tableHeaders = ['Customer Name', 'Customer Address', 'Customer Type','Sale Product', 'Sales Price', 'Order Date'];
  tableRowsWithId = [
    [1, 'Asadds', 'MainBsdsdsazar', true, '5 isdasdastem', '3604340', "25/15/2018"]
  ];
  dataType = ['string', 'string', Boolean, 'string', Number , Date ];
    
  constructor(private service: EditableTableService) {
  }
  
  ngOnInit() {
    this.service.createTableWithIds(this.tableHeaders, this.tableRowsWithId, this.dataType);
  }

}







// import { Component } from '@angular/core';
// import { GetTokenService } from '../services/getToken.service';
//
// @Component({
//   moduleId: module.id,
//   selector: 'stripe-form',
//   templateUrl: 'stripe-form.component.html',
//   // styleUrls: ['stripe-form.component.css']
//     providers: [GetTokenService ]
// })
// export class StripeFormComponent {
//   token:string;
//   datadb:String[];
//   message:String[];
//
//   constructor{
//     this.message = ['tokenID', 'card', 'cvc']
//   }
//
  // openCheckout(getmessage: MouseEvent): any{
  //   var handler = (<any>window).StripeCheckout.configure({
  //    key: 'pk_test_Dlf2JJqlhlvw4dpaIcWmWDPh',
  //     locale: 'auto',
  //     token: function (token: any) {
  //       // You can access the token ID with `token.id`.
  //       // Get the token ID to your server-side code for use.
  //       //
  //       console.log(token);
  //       console.log(this.token);
  //
  //       this.message= token
  //
  //     }
  //
  //   });
  //
  //   this.datadb.push(this.message));
  //   console.log(this.message);
  //   // this.tokenService.openCheckout(this.message)
  //   // .subscribe((data: string): any =>{
  //   //     this.datadb.push(data);
  //   //     console.log("datadb token");
  //   //     console.log(this.datadb)
  //   // });
  //
  //   handler.open({
  //     name: 'Demo Site',
  //     description: '2 widgets',
  //     amount: 2000
  //   });
  //
  // }
