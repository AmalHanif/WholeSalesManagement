import { IModalDialog, IModalDialogOptions } from 'ngx-modal-dialog';
import { Component, ComponentRef } from '@angular/core';
import { AddService } from '../services/add.service';

@Component({
  selector: 'dialogbox',
  templateUrl: `./dialogbox.component.html`,
  styles: [':host { background: white; display: block; padding: 5px } '],
  providers: [AddService ]
})
export class DialogboxComponent implements IModalDialog {
  parentInfo: string;
  cName: string;
  cAddress: string;
  originalPrice:Number;
  salesProducts:string;
  salesPrice:Number;
  orderDate:Date;
  customerdb: String[];

  constructor(private AddService: AddService){}

  dialogInit(reference: ComponentRef<IModalDialog>, options: Partial<IModalDialogOptions<string>>) {
    this.parentInfo = options.data;
  }
  addCustomerData(event: MouseEvent): any{
    event.preventDefault();
    var newData:any = {
        cName: this.cName,
        cAddress: this.cAddress,
        originalPrice:this.originalPrice,
        salesProducts:this.salesProducts,
        salesPrice:this.salesPrice,
        orderDate:this.orderDate
    }
      console.log(newData);
    this.AddService.addCustomerData(newData)
    .subscribe((data: string): any =>{
        this.customerdb.push(data);
        console.log(data)
    });
  }
}
 