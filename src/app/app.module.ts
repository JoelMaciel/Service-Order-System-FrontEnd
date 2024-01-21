import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { MatSelectModule } from '@angular/material/select';
import { MatInputModule } from '@angular/material/input';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatListModule } from '@angular/material/list';
import { MatCardModule } from '@angular/material/card';
import { MatTableModule } from '@angular/material/table';
import { MatPaginatorModule } from '@angular/material/paginator';
import { HeaderComponent } from './views/components/template/header/header.component';
import { FooterComponent } from './views/components/template/footer/footer.component';
import { NavComponent } from './views/components/template/nav/nav.component';
import { HomeComponent } from './views/components/home/home.component';
import { TechnicalReadComponent } from './views/components/technical/technical-read/technical-read.component';
import { TechnicalCreateComponent } from './views/components/technical/technical-create/technical-create.component';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { TechnicalUpdateComponent } from './views/components/technical/technical-update/technical-update.component';
import { TechnicalDeleteComponent } from './views/components/technical/technical-delete/technical-delete.component';
import { CustomerReadComponent } from './views/components/customer/customer-read/customer-read.component';
import { CustomerCreateComponent } from './views/components/customer/customer-create/customer-create.component';
import { CustomerUpdateComponent } from './views/components/customer/customer-update/customer-update.component';
import { CustomerDeleteComponent } from './views/components/customer/customer-delete/customer-delete.component';
import { OrderserviceReadComponent } from './views/components/orderservice/orderservice-read/orderservice-read.component';
import { OrderserviceCreateComponent } from './views/components/orderservice/orderservice-create/orderservice-create.component';
import { OrderserviceUpdateComponent } from './views/components/orderservice/orderservice-update/orderservice-update.component';
import { OrderserviceViewComponent } from './views/components/orderservice/orderservice-view/orderservice-view.component';




@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    NavComponent,
    HomeComponent,
    TechnicalReadComponent,
    TechnicalCreateComponent,
    TechnicalUpdateComponent,
    TechnicalDeleteComponent,
    CustomerReadComponent,
    CustomerCreateComponent,
    CustomerUpdateComponent,
    CustomerDeleteComponent,
    OrderserviceReadComponent,
    OrderserviceCreateComponent,
    OrderserviceUpdateComponent,
    OrderserviceViewComponent
  ],
  imports: [
    BrowserModule,
    MatSnackBarModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    HttpClientModule,
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatSidenavModule,
    MatIconModule,
    MatButtonModule,
    MatListModule,
    MatCardModule,
    MatTableModule,
    MatSelectModule,
    MatInputModule,
    MatDatepickerModule,
    MatPaginatorModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
