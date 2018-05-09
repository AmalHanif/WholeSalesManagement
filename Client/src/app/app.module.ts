import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import { MDBBootstrapModule } from 'angular-bootstrap-md';
import { EditableTableModule } from 'ng-editable-table/editable-table/editable-table.module';

import { AppComponent }  from './app.component';
import { NavbarComponent }  from './components/navbar.component';
import { HomeComponent }  from './components/home.component';
import { AboutComponent }  from './components/about.component';
import { DealerComponent }  from './components/dealer.component';
import { SupplierComponent }  from './components/supplier.component';
import { StockComponent }  from './components/stock.component';
import { SalesComponent }  from './components/sales.component';
import { LoginComponent }  from './components/login.component';
import { SignInComponent }  from './components/signup.component';
import { Routing }  from './app.routing';



@NgModule({
  declarations: [
    AppComponent, NavbarComponent, HomeComponent, AboutComponent, StockComponent, SalesComponent, SupplierComponent, DealerComponent, LoginComponent,SignInComponent
  ],
  imports: [
    BrowserModule, FormsModule , HttpModule, EditableTableModule, Routing,
    MDBBootstrapModule.forRoot()
  ],
  schemas: [ NO_ERRORS_SCHEMA ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
