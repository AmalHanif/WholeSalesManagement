import {Component } from '@angular/core';
import { SupplierService } from '../services/supplier.service';
 @Component({
   selector: 'supplier',
   templateUrl: './supplier.component.html',
   providers: [SupplierService ]
 })
 export class SupplierComponent   {
  name : string;
  tableHeaders :String[];
  tableRowsWithId:String[];
  showEditRow:boolean;
 
  dataType = ['string', 'string', Boolean, 'string', Number , Date ];
  tabledata: string[]; 
  
  constructor(private supplierService: SupplierService) {
    this.tableHeaders = ['Customer Name', 'Customer Address', 'Customer Type','Sale Product', 'Sales Price', 'Order Date'];
    this.tabledata =
      [ 'Asad', 'MainBazar', 'cash', '5 item', '3600', "25/1/2018"]
  
    this.supplierService.getSupplierData().subscribe(data =>{
      // this.tabledata= data;
    });
  }
  toggleRow(){
    if(this.showEditRow== true){
        this.showEditRow= false;
    } else{
      this.showEditRow= true;
    }
  }
  editRow(event: MouseEvent): any{
    event.preventDefault();
    var newData:any = {
      tableHeaders:this.tableHeaders
    }
      console.log(newData);
    this.supplierService.addData(newData)
    .subscribe((data: string): any =>{
        this.tabledata.push(data);
        this.name =''
    });
  }
}
 


 
 