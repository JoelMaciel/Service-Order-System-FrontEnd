import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './views/components/home/home.component';
import { TechnicalReadComponent } from './views/components/technical/technical-read/technical-read.component';
import { TechnicalCreateComponent } from './views/components/technical/technical-create/technical-create.component';

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
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
