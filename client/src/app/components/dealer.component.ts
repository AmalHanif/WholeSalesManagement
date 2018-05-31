import { Component,OnInit, ViewContainerRef  } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Subject } from 'rxjs';

import { ModalDialogService, SimpleModalComponent } from 'ngx-modal-dialog';
import { DealerPopupComponent } from './dealerPopup.component';
import 'rxjs/add/operator/map';

 @Component({
   selector: 'dealer',
   templateUrl: './dealer.component.html',
  //  providers: [PostsService  ]
 })

 export class DealerComponent implements OnInit {
  dtOptions: any = {};
  dealerInfo: dealerInfo[] = [];
  // We use this trigger because fetching the list of persons can be quite long,
  // thus we ensure the data is fetched before rendering
  dtTrigger: Subject<any> = new Subject();

  constructor(private  http: Http , private modalDialogService: ModalDialogService, private viewContainer: ViewContainerRef) {}

  openCustomModal() {
    this.modalDialogService.openDialog(this.viewContainer, {
      title: 'Add New dealer __________________ ',
      childComponent: DealerPopupComponent,
      settings: {
        bodyClass:'mdb-color modal-body',
        closeButtonClass: ' btn-danger fa fa-close prefix grey-text'
      },
      // actionButtons: [
      //   {
      //     text: 'Cancel',
      //     buttonClass: 'btn btn-danger',
      //     onAction: () => new Promise((resolve: any) => {
      //       setTimeout(() => {
      //         resolve();
      //       }, 20);
      //     })
      //   },
      // ],  
    });
  }

  
  ngOnInit(): void {
    this.dtOptions = {
      pagingType: 'full_numbers',
      pageLength: 10,
       // Declare the use of the extension in the dom parameter
       dom: 'Bfrtip',
       // Configure the buttons
        buttons : [
         'colvis',
         'copy',
         'csv',
         'print',
        ]
      };
      this.http.get('http://localhost:8000/api/wholeSales/dealers')
      .map(this.extractData)
      .subscribe(data => {
          this.dealerInfo = data;
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

export class dealerInfo{
  id: Number;
  dName: String;
  company: String;
  purchaseProducts:String;
  purchasePrice:Number;
  purchasingDate:Date;
}

interface IModalDialogSettings {
  // overlayClass: string;
  // overlayAnimationTriggerClass: string;
  // modalClass: string;
  // modalAnimationTriggerClass: string;
  // contentClass: string;
  // headerClass: string;
  // headerTitleClass: string;
  // closeButtonClass: string;
  closeButtonTitle: string;
  bodyClass: string;
  // footerClass: string;
  // alertClass: string;
  // alertDuration: number;
  // buttonClass: string;
  // notifyWithAlert: boolean;
}