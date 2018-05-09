import{ModuleWithProviders } from '@angular/core';
import{Routes, RouterModule } from '@angular/router';

import{NavbarComponent} from './components/navbar.component';
import{LoginComponent} from './components/login.component';
import{SignInComponent} from './components/signup.component';
import{HomeComponent} from './components/home.component';
import{AboutComponent} from './components/about.component';
import{DealerComponent} from './components/dealer.component';
import{SalesComponent} from './components/sales.component';
import{StockComponent} from './components/stock.component';
import{SupplierComponent} from './components/supplier.component';

const appRoutes: Routes =[
  {
    path:'home',
    component: HomeComponent
  },
  {
    path: 'about',
    component: AboutComponent
  },
  {
    path: 'dealer',
    component: DealerComponent
  },
  {
    path: 'supplier',
    component: SupplierComponent
  },
  {
    path: 'stock',
    component: StockComponent
  },
  {
    path: 'sales',
    component: SalesComponent
  },
  {
    path: 'login',
    component: LoginComponent
  },
  {
    path: 'signup',
    component: SignInComponent
  },
];

export const Routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);
