import {Component } from '@angular/core';
 import { EditableTableService } from 'ng-editable-table/editable-table/editable-table.service';
import { GetTokenService } from '../services/getToken.service';

@Component({
  selector: 'dealer',
  templateUrl: './dealer.component.html',
  providers: [GetTokenService ]
})
export class DealerComponent   {
  name:string;
  companyName:string;
  telNumber:string;
  pName:string;
  pPrice:string;
  pQuantity : string;
  purchaseDate : string;

  tableHeaders = ['Dealer Name', 'Dealer Company', 'Dealer Type','Purchase Product', 'Purchase Price', 'Purchasing Date'];
  tableRowsWithId = [
    [1, 'Asad', 'MainBazar', true, '5 item', '3600', "25/1/2018"]
  ];
  dataType = ['string', 'string', Boolean, 'string', Number , Date ];

  datadb:String[];
  message: string;
  // constructor(private getTokenService: GetTokenService){

  //     this.getTokenService.getData().subscribe(data =>{
  //       this.datadb= data;

  //     });
  // }

    
  constructor(private service: EditableTableService) {
  }
  
  ngOnInit() {
    this.service.createTableWithIds(this.tableHeaders, this.tableRowsWithId, this.dataType);
  }
}
