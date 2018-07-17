import { Component, OnInit, ViewContainerRef } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Subject } from 'rxjs';
import { Router } from '@angular/router';

import { ModalDialogService, SimpleModalComponent } from 'ngx-modal-dialog';
import { SalesPopupComponent } from './salesPopup.component';
import { SalesEditComponent} from './sales-edit.component';
import 'rxjs/add/operator/map';

@Component({
  moduleId: module.id,
  selector: 'sales',
  templateUrl: './sales.component.html',
  // styleUrls: ['stripe-form.component.css']
})
export class SalesComponent  implements OnInit  {
  dtOptions: any = {};
  salesInfo: salesInfo[] = [];
  // We use this trigger because fetching the list of persons can be quite long,
  // thus we ensure the data is fetched before rendering
  dtTrigger: Subject<any> = new Subject();

  constructor(private  http: Http ,private router: Router,
            private modalDialogService: ModalDialogService,
            private viewContainer: ViewContainerRef) {}

  openCustomModal() {
    this.modalDialogService.openDialog(this.viewContainer, {
      title: 'Add New sales __________________ ',
      childComponent: SalesPopupComponent,
      settings: {
        bodyClass:'mdb-color modal-body',
        closeButtonClass: ' btn-danger fa fa-close prefix grey-text'
      },
    });
  }

  editData(salesInfo){ 
    this.modalDialogService.openDialog(this.viewContainer, {
      
      title: 'Update Sales Data__________________ ',
      childComponent:SalesEditComponent ,
      data: salesInfo,
      settings: {
        bodyClass:'mdb-color modal-body',
        closeButtonClass: ' btn-danger fa fa-close prefix grey-text'
      },
    });
  }

  delData(id){
    console.log(id)
    this.http.delete('http://localhost:8000/api/wholeSales/sales/'+id)
    .subscribe(res => {
        console.log(res)
        // this.router.navigate(['../sales']);
        window.location.href = "/sales";
      }, (err) => {
        console.log("Error = "+err);
      }
    );
  }

  ngOnInit(): void {
    this.dtOptions = {
      pagingType: 'full_numbers',
      pageLength: 10,
      // Declare the use of the extension in the dom parameter
      dom: 'Bfrtip',
      // Configure the buttons
      buttons: [
        'colvis',
        'copy',
        'csv',
        'print'
      ]
    };
    this.http.get('http://localhost:8000/api/wholeSales/sales')
    .map(this.extractData)
    .subscribe(data => {
        this.salesInfo = data;
        console.log(data)
        // Calling the DT trigger to manually render the table
        this.dtTrigger.next();
    });
  }

  private extractData(res: Response) {
    const body = res.json();
    console.log(body)
    return body || {};
  }
}
 

export class salesInfo{
  sID:Number;
  cName: String;
  cAddress: String;
  pName: String;
  pBrand: String;
  pQuantity:String;
  pSold:Number;
  pPrice:Number
  soldDate:Date;
}

interface IModalDialogSettings<T> {
  closeButtonTitle: string;
  bodyClass: string;
  data: T;
}