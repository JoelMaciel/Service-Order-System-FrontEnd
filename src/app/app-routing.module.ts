import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './views/components/home/home.component';
import { TechnicalReadComponent } from './views/components/technical/technical-read/technical-read.component';
import { TechnicalCreateComponent } from './views/components/technical/technical-create/technical-create.component';
import { TechnicalUpdateComponent } from './views/components/technical/technical-update/technical-update.component';
import { TechnicalDeleteComponent } from './views/components/technical/technical-delete/technical-delete.component';

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
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
