import { Component,ComponentRef } from '@angular/core';
import { IModalDialog, IModalDialogOptions } from 'ngx-modal-dialog';;
import { Http, Response } from '@angular/http';
import { Router } from '@angular/router';
@Component({
  selector: 'app-dealer-edit',
   templateUrl: './dealer-edit.component.html',
   styles: [':host { background: white; display: block; padding: 5px } ']
})
export class DealerEditComponent implements IModalDialog {
  parentInfo: string;
  dId: number;
  dName: string;
  company: string;
  purchaseProducts:string;
  purchasePrice:Number;
  purchasingDate:Date;
  dealerdb: String[];

  constructor(private  http: Http, private router: Router,){}

  dialogInit(reference: ComponentRef<IModalDialog>, options: Partial<IModalDialogOptions<string>>) {
    this.parentInfo = options.data;

    console.log("parent Data"+ JSON.stringify(this.parentInfo))
  }
  editDealerData(id, data ){
    console.log(this.parentInfo)
    this.http.put('http://localhost:8000/api/wholeSales/dealers/'+id, data)
    .subscribe(res => {
      console.log(res)
        let id = res['_id'];
      }, (err) => {
        console.log("Error = "+err);
      }
    );
  }
}
