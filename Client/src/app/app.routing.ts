import{ModuleWithProviders } from '@angular/core';
import{Routes, RouterModule } from '@angular/router';

import{NavbarComponent} from './components/navbar.component';
import{LoginComponent} from './components/login/login.component';
import{SignInComponent} from './components/signup.component';
import{HomeComponent} from './components/home/home.component';
import{DealerComponent} from './components/dealer/dealer.component';
import{SalesComponent} from './components/sales/sales.component';
import{StockComponent} from './components/stock/stock.component';
import{CustomerComponent} from './components/customer/customer.component';

const appRoutes: Routes =[
  {
    path:'home',
    component: HomeComponent
  },
  {
    path: 'dealer',
    component: DealerComponent
  },
  {
    path: 'customer',
    component: CustomerComponent
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
    path: '',
    component: LoginComponent
  },
  {
    path: 'signup',
    component: SignInComponent
  },
];

export const Routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);
