import { IModalDialog, IModalDialogOptions } from 'ngx-modal-dialog';
import { Component, ComponentRef } from '@angular/core';
import { AddService } from '../services/add.service';

@Component({
  selector: 'dealerPopup',
  templateUrl: `./dealerPopup.component.html`,
  styles: [':host { background: white; display: block; padding: 5px } '],
  providers: [AddService ]
})
export class DealerPopupComponent implements IModalDialog {
  parentInfo: string;
  dName: string;
  company: string;
  purchaseProducts:string;
  purchasePrice:Number;
  purchasingDate:Date;
  dealerdb: String[];

  constructor(private AddService: AddService){}

  dialogInit(reference: ComponentRef<IModalDialog>, options: Partial<IModalDialogOptions<string>>) {
    this.parentInfo = options.data;
  }
  addDealerData(event: MouseEvent): any{
    event.preventDefault();
    var newData:any = {
        dName: this.dName,
        company: this.company,
        purchaseProducts:this.purchaseProducts,
        purchasePrice:this.purchasePrice,
        purchasingDate:this.purchasingDate
    }
      console.log(newData);
    this.AddService.addDealerData(newData)
    .subscribe((data: string): any =>{
        this.dealerdb.push(data);
        console.log(data)
    });
  }
}
 