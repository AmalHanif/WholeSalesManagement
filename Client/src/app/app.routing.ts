import{ModuleWithProviders } from '@angular/core';
import{Routes, RouterModule } from '@angular/router';

import{UserComponent} from './components/user.component';
import{AboutComponent} from './components/about.component';
import{LoginComponent} from './components/login.component';

const appRoutes: Routes =[
  {
    path:'',
    component: UserComponent
  },
  {
    path: 'about',
    component: AboutComponent
  },
  {
    path: 'login',
    component: LoginComponent
  }
];

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);
