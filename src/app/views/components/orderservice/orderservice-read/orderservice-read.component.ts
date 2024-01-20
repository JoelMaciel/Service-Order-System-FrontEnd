import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { Router } from '@angular/router';
import { OrderService } from 'src/app/models/orderservice';
import { CustomerService } from 'src/app/services/customer.service';
import { OrderservicesService } from 'src/app/services/orderservices.service';
import { TechnicalService } from 'src/app/services/technical.service';

@Component({
  selector: 'app-orderservice-read',
  templateUrl: './orderservice-read.component.html',
  styleUrls: ['./orderservice-read.component.css']
})
export class OrderserviceReadComponent implements AfterViewInit {

  orderservices: OrderService[] = []

  displayedColumns: string[] = ['customer', 'technician', 'priority', 'status', 'openingDate', 'closingDate', 'action'];
  dataSource = new MatTableDataSource<OrderService>(this.orderservices);


  @ViewChild(MatPaginator) paginator!: MatPaginator;

  constructor(
    private service: OrderservicesService,
    private router: Router,
    private technicianService: TechnicalService,
    private customerService: CustomerService
  ) { }

  ngAfterViewInit() {

    this.findAll();
  }

  findAll(): void {
    this.service.findAll().subscribe((response) => {
      this.orderservices = response;
      this.listTechnicians()
      this.listCustomers()
      this.dataSource = new MatTableDataSource<OrderService>(this.orderservices);
      this.dataSource.paginator = this.paginator;

    })
  }

  navigateToCreate(): void {
    this.router.navigate(["orderservices/create"])
  }

  listTechnicians(): void {
    this.orderservices.forEach(orderService => {
      this.technicianService.findById(orderService.technician).subscribe(response => {
        orderService.technician = response.name
      })
    });
  }

  listCustomers(): void {
    this.orderservices.forEach(orderService => {
      this.customerService.findById(orderService.customer).subscribe(response => {
        orderService.customer = response.name;
      })

    });
  }

}