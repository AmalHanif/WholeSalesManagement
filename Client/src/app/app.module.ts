import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpModule } from '@angular/http';
import { HttpClientModule } from '@angular/common/http'; 
import { FormsModule } from '@angular/forms';
import { DataTablesModule } from 'angular-datatables';
import * as $ from 'jquery';
import { ModalDialogModule } from 'ngx-modal-dialog';
import { MDBBootstrapModule } from 'angular-bootstrap-md';
import { EditableTableModule } from 'ng-editable-table/editable-table/editable-table.module';

import { AppComponent }  from './app.component';
import { NavbarComponent }  from './components/navbar.component';
import { HomeComponent }  from './components/home/home.component';
import { DealerComponent }  from './components/dealer/dealer.component';
import { CustomerComponent }  from './components/customer/customer.component';
import { StockComponent }  from './components/stock/stock.component';
import { SalesComponent }  from './components/sales/sales.component';
import { LoginComponent }  from './components/login/login.component'; 
import { SignInComponent }  from './components/signup.component';
import { DialogboxComponent }  from './components/customer/dialogbox.component';
import { DealerPopupComponent }  from './components/dealer/dealerPopup.component';
import { StockPopupComponent }  from './components/stock/stockPopup.component';
import { SalesPopupComponent }  from './components/sales/salesPopup.component';
import { DealerEditComponent } from './components/dealer/dealer-edit.component';
import { SalesEditComponent } from './components/sales/sales-edit.component';
import { StockEditComponent } from './components/stock/stock-edit.component';
import { CustomerEditComponent } from './components/customer/customer-edit.component';
import { Routing }  from './app.routing';

import {UserService} from './services/user.service';


@NgModule({
  declarations: [
    AppComponent, NavbarComponent, HomeComponent, StockComponent, SalesComponent, CustomerComponent, DialogboxComponent, StockPopupComponent, SalesPopupComponent, DealerPopupComponent, DealerComponent, LoginComponent,SignInComponent, DealerEditComponent,SalesEditComponent,StockEditComponent,CustomerEditComponent
  ],
  imports: [
    BrowserModule, FormsModule , HttpModule, EditableTableModule, Routing,DataTablesModule, HttpClientModule,
    MDBBootstrapModule.forRoot(),ModalDialogModule.forRoot()
  ],
  schemas: [ NO_ERRORS_SCHEMA ],
  providers: [UserService],
  bootstrap: [AppComponent],
  entryComponents: [DialogboxComponent, DealerPopupComponent,DealerEditComponent, StockPopupComponent, StockEditComponent ,SalesPopupComponent,SalesEditComponent,CustomerEditComponent ] 
})
export class AppModule { }
