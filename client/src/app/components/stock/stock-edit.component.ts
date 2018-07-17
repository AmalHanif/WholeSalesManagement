import { IModalDialog, IModalDialogOptions } from 'ngx-modal-dialog';
import { Component, ComponentRef } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Router } from '@angular/router';


@Component({
  selector: 'stock-edit',
  templateUrl: `./stock-edit.component.html`,
  styles: [':host { background: white; display: block; padding: 5px } ']
})
export class StockEditComponent implements IModalDialog {
    parentInfo: string;
    pName: String;
    pBrand: String;
    pQuantity:String;
    pCost:Number;
    pPrice:Number;
    purchaseDate:Date;
    stockdb: String[];

  constructor(private http: Http, private router: Router){}

  dialogInit(reference: ComponentRef<IModalDialog>, options: Partial<IModalDialogOptions<string>>) {
    this.parentInfo = options.data;
  }
  editStockData(id, data ){
    console.log(this.parentInfo)
    this.http.put('http://localhost:8000/api/wholeSales/stocks/'+id, data)
    .subscribe(res => {
      console.log(res)
        let id = res['_id'];
      }, (err) => {
        console.log("Error = "+err);
      }
    );
  }
}