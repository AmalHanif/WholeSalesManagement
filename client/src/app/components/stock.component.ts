import { Component, OnInit, ViewContainerRef    } from '@angular/core';
// import { EditableTableService } from 'ng-editable-table/editable-table/editable-table.service';
import { Http, Response } from '@angular/http';
import { Subject } from 'rxjs';

import { ModalDialogService, SimpleModalComponent } from 'ngx-modal-dialog';
import { StockPopupComponent } from './stockPopup.component';
import 'rxjs/add/operator/map';
@Component({
  moduleId: module.id,
  selector: 'stock',
  templateUrl: './stock.component.html',
  // styleUrls: ['stripe-form.component.css']
})
export class StockComponent  implements OnInit  {
  dtOptions: any = {};
  stockInfo: StockInfo[] = [];
  // We use this trigger because fetching the list of persons can be quite long,
  // thus we ensure the data is fetched before rendering
  dtTrigger: Subject<any> = new Subject();

  constructor(private http: Http , private modalDialogService: ModalDialogService, private viewContainer: ViewContainerRef) {}

  openCustomModal() {
    this.modalDialogService.openDialog(this.viewContainer, {
      title: 'Add New stock __________________ ',
      childComponent: StockPopupComponent,
      settings: {
        bodyClass:'mdb-color modal-body',
        closeButtonClass: ' btn-danger fa fa-close prefix grey-text'
      }, 
    });
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
    this.http.get('http://localhost:8000/api/wholeSales/stocks')
    .map(this.extractData)
    .subscribe(data => {
        this.stockInfo = data;
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
 

export class StockInfo{
  pName: String;
  pBrand: String;
  pQuantity:String;
  pCost:Number;
  pPrice:Number;
  purchaseDate:Date;
}
interface IModalDialogSettings {
 
  closeButtonTitle: string;
  bodyClass: string;
}