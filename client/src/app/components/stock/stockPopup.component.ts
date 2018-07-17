import { IModalDialog, IModalDialogOptions } from 'ngx-modal-dialog';
import { Component, ComponentRef } from '@angular/core';
import { AddService } from '../../services/add.service';


@Component({
  selector: 'stockPopup',
  templateUrl: `./stockPopup.component.html`,
  styles: [':host { background: white; display: block; padding: 5px } '],
  providers: [AddService ]
})
export class StockPopupComponent implements IModalDialog {
    parentInfo: string;
    pName: String;
    pBrand: String;
    pQuantity:String;
    pCost:Number;
    pPrice:Number;
    purchaseDate:Date;
    stockdb: String[];

    constructor(private AddService: AddService){{
      this.AddService.getSalesData().subscribe(data =>{
        this.stockdb= data;
      });
    }
  }

  dialogInit(reference: ComponentRef<IModalDialog>, options: Partial<IModalDialogOptions<string>>) {
    this.parentInfo = options.data;
  }
  addStockData(event: MouseEvent): any{
    event.preventDefault();
    var newData:any = {
        pID:this.stockdb.length,
        pName: this.pName,
        pBrand: this.pBrand,
        pQuantity:this.pQuantity,
        pCost:this.pCost,
        pPrice:this.pPrice,
        purchaseDate:this.purchaseDate
    }
      console.log(newData);
    this.AddService.addStockData(newData)
    .subscribe((data: string): any =>{
        this.stockdb.push(data);
        console.log(data)
    });
    window.location.href = "/stock";
  }
}
 