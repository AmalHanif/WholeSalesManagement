import { Component } from '@angular/core';
import { EditableTableService } from 'ng-editable-table/editable-table/editable-table.service';
import { GetTokenService } from '../services/getToken.service';

@Component({
  moduleId: module.id,
  selector: 'sales',
  templateUrl: 'sales.component.html',
  providers: [GetTokenService ]
})
export class SalesComponent {
  name : string;
  email : string;
  country : string;
  cus_id : string;
  datadb:String;
  constructor(private getTokenService: GetTokenService){

    this.getTokenService.getData().subscribe(data =>{
      this.datadb= data;
    });
  }



}
