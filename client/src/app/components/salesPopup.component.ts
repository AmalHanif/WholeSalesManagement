import { IModalDialog, IModalDialogOptions } from 'ngx-modal-dialog';
import { Component, ComponentRef } from '@angular/core';
import { AddService } from '../services/add.service';

@Component({
  selector: 'salesPopup',
  templateUrl: `./salesPopup.component.html`,
  styles: [':host { background: white; display: block; padding: 5px } '],
  providers: [AddService ]
})
export class SalesPopupComponent implements IModalDialog {
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

  constructor(private AddService: AddService){}

  dialogInit(reference: ComponentRef<IModalDialog>, options: Partial<IModalDialogOptions<string>>) {
    this.parentInfo = options.data;
  }
  addSalesData(event: MouseEvent): any{
    event.preventDefault();
    var newData:any = {
        cName: this.cName,
        cAddress: this.cAddress,
        pName:this.pName,
        pBrand:this.pBrand,
        pQuantity:this.pQuantity,
        pSold:this.pSold,
        pPrice:this.pPrice,
        soldDate:this.soldDate
    }
      console.log(newData);
    this.AddService.addSalesData(newData)
    .subscribe((data: string): any =>{
        this.Salesdb.push(data);
        console.log(data)
    });
  }
}
 