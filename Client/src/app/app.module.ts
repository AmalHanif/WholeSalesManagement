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
import { HomeComponent }  from './components/home.component';
import { AboutComponent }  from './components/about.component';
import { DealerComponent }  from './components/dealer.component';
import { CustomerComponent }  from './components/customer.component';
import { StockComponent }  from './components/stock.component';
import { SalesComponent }  from './components/sales.component';
import { LoginComponent }  from './components/login.component';
import { SignInComponent }  from './components/signup.component';
import { DialogboxComponent }  from './components/dialogbox.component';
import { DealerPopupComponent }  from './components/dealerPopup.component';
import { StockPopupComponent }  from './components/stockPopup.component';
import { SalesPopupComponent }  from './components/salesPopup.component';
import { Routing }  from './app.routing';



@NgModule({
  declarations: [
    AppComponent, NavbarComponent, HomeComponent, AboutComponent, StockComponent, SalesComponent, CustomerComponent, DialogboxComponent, StockPopupComponent, SalesPopupComponent, DealerPopupComponent, DealerComponent, LoginComponent,SignInComponent
  ],
  imports: [
    BrowserModule, FormsModule , HttpModule, EditableTableModule, Routing,DataTablesModule, HttpClientModule,
    MDBBootstrapModule.forRoot(),ModalDialogModule.forRoot()
  ],
  schemas: [ NO_ERRORS_SCHEMA ],
  providers: [],
  bootstrap: [AppComponent],
  entryComponents: [DialogboxComponent, DealerPopupComponent, StockPopupComponent, SalesPopupComponent ] 
})
export class AppModule { }
