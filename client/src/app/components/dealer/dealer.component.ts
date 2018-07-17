import { Component, OnInit, ViewContainerRef,  Renderer } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Subject } from 'rxjs';
import { Router } from '@angular/router';

import { ModalDialogService, SimpleModalComponent } from 'ngx-modal-dialog';
import { DealerPopupComponent } from './dealerPopup.component';
import { DealerEditComponent} from './dealer-edit.component';
import 'rxjs/add/operator/map';
 
 @Component({
   selector: 'dealer',
   templateUrl: './dealer.component.html'
 })

 export class DealerComponent implements OnInit{
  dtOptions: any = {};
  dealerInfo: dealerInfo[] = [];
  // We use this trigger because fetching the list of persons can be quite long,
  // thus we ensure the data is fetched before rendering
  dtTrigger: Subject<any> = new Subject();

  constructor(private  http: Http ,private renderer: Renderer, private router: Router,
              private modalDialogService: ModalDialogService,
              private viewContainer: ViewContainerRef) {}

  openCustomModal() {
    this.modalDialogService.openDialog(this.viewContainer, {
      title: 'Add New Dealer __________________ ',
      childComponent: DealerPopupComponent,
      settings: {
        bodyClass:'mdb-color modal-body',
        closeButtonClass: ' btn-danger fa fa-close prefix grey-text',
      } 
    });
  }

  editData(dealerInfo){

    this.modalDialogService.openDialog(this.viewContainer, {
     
      title: 'Update Dealer Data__________________ ',
      childComponent:DealerEditComponent ,
      data: dealerInfo,
      settings: {
        bodyClass:'mdb-color modal-body',
        closeButtonClass: ' btn-danger fa fa-close prefix grey-text'
      },
    });
  }

  delData(id){
    console.log(id)
    this.http.delete('http://localhost:8000/api/wholeSales/dealers/'+id)
    .subscribe(res => {
        console.log(res)
        // this.router.navigate(['../dealer']);
        window.location.href = "/dealer";
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
  dID: Number;
  dName: String;
  company: String;
  purchaseProducts:String;
  purchasePrice:Number;
  purchasingDate:Date;
}

interface IModalDialogSettings<T> {
  closeButtonTitle: string;
  bodyClass: string;
  data: T;

}