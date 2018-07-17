import { IModalDialog, IModalDialogOptions } from 'ngx-modal-dialog';
import { Component, ComponentRef } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Router } from '@angular/router';

@Component({
  selector: 'customer-edit',
  templateUrl: `./customer-edit.component.html`,
  styles: [':host { background: white; display: block; padding: 2px } '],
})
export class CustomerEditComponent implements IModalDialog {
  parentInfo: string;
  cID: Number;
  cName: string;
  cAddress: string;
  originalPrice:Number;
  salesProducts:string;
  salesPrice:Number;
  orderDate:Date;
  customerdb: String[];

  constructor(private http: Http, private router: Router){}

  dialogInit(reference: ComponentRef<IModalDialog>, options: Partial<IModalDialogOptions<string>>) {
    this.parentInfo = options.data;
  }
  editCustomerData(id, data ){
    console.log(this.parentInfo)
    this.http.put('http://localhost:8000/api/wholeSales/customers/'+id, data)
    .subscribe(res => {
      console.log(res)
        let id = res['_id'];
      }, (err) => {
        console.log("Error = "+err);
      }
    );
  }
}
 