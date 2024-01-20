import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './views/components/home/home.component';
import { TechnicalReadComponent } from './views/components/technical/technical-read/technical-read.component';
import { TechnicalCreateComponent } from './views/components/technical/technical-create/technical-create.component';
import { TechnicalUpdateComponent } from './views/components/technical/technical-update/technical-update.component';
import { TechnicalDeleteComponent } from './views/components/technical/technical-delete/technical-delete.component';
import { CustomerReadComponent } from './views/components/customer/customer-read/customer-read.component';
import { CustomerCreateComponent } from './views/components/customer/customer-create/customer-create.component';
import { CustomerUpdateComponent } from './views/components/customer/customer-update/customer-update.component';
import { CustomerDeleteComponent } from './views/components/customer/customer-delete/customer-delete.component';
import { OrderserviceReadComponent } from './views/components/orderservice/orderservice-read/orderservice-read.component';
import { OrderserviceCreateComponent } from './views/components/orderservice/orderservice-create/orderservice-create.component';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent
  },
  {
    path: 'technicians',
    component: TechnicalReadComponent
  },
  {
    path: 'technicians/create',
    component: TechnicalCreateComponent
  },
  {
    path: 'technicians/update/:id',
    component: TechnicalUpdateComponent
  },
  {
    path: 'technicians/delete/:id',
    component: TechnicalDeleteComponent
  },
  {
    path: "customers",
    component: CustomerReadComponent
  },
  {
    path: "customers/create",
    component: CustomerCreateComponent
  },
  {
    path: "customers/update/:id",
    component: CustomerUpdateComponent
  }, {
    path: "customers/delete/:id",
    component: CustomerDeleteComponent
  },
  {
    path: "orderservices",
    component: OrderserviceReadComponent
  },
  {
    path: "orderservices/create",
    component: OrderserviceCreateComponent
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
