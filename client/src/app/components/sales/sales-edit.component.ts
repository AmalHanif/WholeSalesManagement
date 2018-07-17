import { IModalDialog, IModalDialogOptions } from 'ngx-modal-dialog';
import { Component, ComponentRef } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Router } from '@angular/router';

@Component({
  selector: 'sales-edit',
  templateUrl: `./sales-edit.component.html`,
  styles: [':host { background: white; display: block; padding: 2px } '],
})
export class SalesEditComponent implements IModalDialog {
  parentInfo: string;
  cName: String;
  cAddress: String;
  pName: String;
  pBrand: String;
  pQuantity:String;
  pSold:Number;
  pPrice:Number
  soldDate:Date;
  Salesdb: String[];

  constructor(private http: Http, private router: Router){}

  dialogInit(reference: ComponentRef<IModalDialog>, options: Partial<IModalDialogOptions<string>>) {
    this.parentInfo = options.data;
  }
  editSalesData(id, data ){
    console.log(this.parentInfo)
    this.http.put('http://localhost:8000/api/wholeSales/sales/'+id, data)
    .subscribe(res => {
      console.log(res)
        let id = res['_id'];
      }, (err) => {
        console.log("Error = "+err);
      }
    );
  }
}
 