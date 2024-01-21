import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Customer } from 'src/app/models/customer';
import { OrderService } from 'src/app/models/orderservice';
import { Technical } from 'src/app/models/technical';
import { CustomerService } from 'src/app/services/customer.service';
import { OrderservicesService } from 'src/app/services/orderservices.service';
import { TechnicalService } from 'src/app/services/technical.service';

@Component({
  selector: 'app-orderservice-create',
  templateUrl: './orderservice-create.component.html',
  styleUrls: ['./orderservice-create.component.css']
})
export class OrderserviceCreateComponent implements OnInit {

  orderservice: OrderService = {
    technician: "",
    customer: "",
    observation: "",
    status: "",
    priority: "",
    openingDate: "",
    closingDate: ""
  }

  technicians: Technical[] = []
  customers: Customer[] = []

  constructor(
    private technicalService: TechnicalService,
    private customerService: CustomerService,
    private service: OrderservicesService,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.listTechnical()
    this.listCustomers()
  }

  create(): void {
    this.service.create(this.orderservice).subscribe(response => {
      this.service.message("Service order created successfully!")
      this.router.navigate(["orderservices"])
    })
  }

  listTechnical(): void {
    this.technicalService.findAll().subscribe(response => {
      this.technicians = response;
    })
  }

  listCustomers(): void {
    this.customerService.findAll().subscribe(response => {
      this.customers = response
    })
  }

  cancel(): void {
    this.router.navigate(["orderservices"])
  }

}
