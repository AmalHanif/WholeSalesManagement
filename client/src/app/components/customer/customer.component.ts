
import { Component,OnInit, ViewContainerRef  } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Subject } from 'rxjs';
import { Router } from '@angular/router';

import { ModalDialogService, SimpleModalComponent } from 'ngx-modal-dialog';
import { DialogboxComponent } from './dialogbox.component';
import { CustomerEditComponent} from './customer-edit.component';
import 'rxjs/add/operator/map';

 @Component({
   selector: 'customer',
   templateUrl: './customer.component.html',
  //  providers: [PostsService  ]
 })

 export class CustomerComponent implements OnInit {
  dtOptions: any = {};
  customerInfo: customerInfo[] = [];
  // We use this trigger because fetching the list of persons can be quite long,
  // thus we ensure the data is fetched before rendering
  dtTrigger: Subject<any> = new Subject();

  constructor(private  http: Http , private modalDialogService: ModalDialogService, private viewContainer: ViewContainerRef) {}
  
  openSimpleModal() {
    this.modalDialogService.openDialog(this.viewContainer, {
      title: 'Add Data',
      childComponent: SimpleModalComponent,
      settings: {
        closeButtonClass: 'close theme-icon-close'
      },
      data: {
        text: '<h2>add data <h2/>',
        input: ''
      }
    });
  }
  openCustomModal() {
    this.modalDialogService.openDialog(this.viewContainer, {
      title: 'Add New Customer __________________ ',
      childComponent: DialogboxComponent,
      settings: {
        bodyClass:'mdb-color modal-body',
        modalClass:'modal ngx-modal',
        modalDialogClass: 'modal-dialog modal-dialog-center',
        closeButtonClass: ' btn-danger fa fa-close prefix grey-text'
      },
    });
  }

  editData(customerInfo){
    
        this.modalDialogService.openDialog(this.viewContainer, {
         
          title: 'Update customer Data__________________ ',
          childComponent: CustomerEditComponent ,
          data: customerInfo,
          settings: {
            bodyClass:'mdb-color modal-body',
            closeButtonClass: ' btn-danger fa fa-close prefix grey-text'
          },
        });
      }
    
      delData(id){
        console.log(id)
        this.http.delete('http://localhost:8000/api/wholeSales/customers/'+id)
        .subscribe(res => {
            console.log(res)
            // this.router.navigate(['../customer']);
            window.location.href = "/customer";
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
      this.http.get('http://localhost:8000/api/wholeSales/customers')
      .map(this.extractData)
      .subscribe(data => {
          this.customerInfo = data;
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

export class customerInfo{
  cID: Number;
  cName: String;
  cAddress: String;
  salesProducts:String;
  originalPrice:Boolean;
  salesPrice:Number;
  orderDate:Date;
}

interface IModalDialogSettings<T>
 {
  closeButtonClass: string;
  closeButtonTitle: string;
  bodyClass: string;
  data:T;
}