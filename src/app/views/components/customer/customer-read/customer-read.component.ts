import { AfterViewInit, Component, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { Router } from '@angular/router';
import { Customer } from 'src/app/models/customer';
import { CustomerService } from 'src/app/services/customer.service';

@Component({
  selector: 'app-customer-read',
  templateUrl: './customer-read.component.html',
  styleUrls: ['./customer-read.component.css']
})
export class CustomerReadComponent implements AfterViewInit {

  customers: Customer[] = []

  displayedColumns: string[] = ['id', 'name', 'cpf', 'phoneNumber', 'action'];
  dataSource = new MatTableDataSource<Customer>(this.customers);


  @ViewChild(MatPaginator) paginator!: MatPaginator;

  constructor(
    private service: CustomerService,
    private router: Router
  ) { }

  ngAfterViewInit() {

    this.findAll();
  }

  findAll(): void {
    this.service.findAll().subscribe((response) => {
      this.customers = response;
      this.dataSource = new MatTableDataSource<Customer>(this.customers);
      this.dataSource.paginator = this.paginator;

    })
  }

  navigateToCreate(): void {
    this.router.navigate(["customers/create"])

  }

}
