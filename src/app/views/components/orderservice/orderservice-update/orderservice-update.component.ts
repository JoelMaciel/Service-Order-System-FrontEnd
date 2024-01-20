import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Customer } from 'src/app/models/customer';
import { OrderService } from 'src/app/models/orderservice';
import { Technical } from 'src/app/models/technical';
import { CustomerService } from 'src/app/services/customer.service';
import { OrderservicesService } from 'src/app/services/orderservices.service';
import { TechnicalService } from 'src/app/services/technical.service';

@Component({
  selector: 'app-orderservice-update',
  templateUrl: './orderservice-update.component.html',
  styleUrls: ['./orderservice-update.component.css']
})
export class OrderserviceUpdateComponent implements OnInit {

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
    private router: Router,
    private route: ActivatedRoute
  ) { }

  ngOnInit(): void {
    this.listTechnical()
    this.listCustomers()
    this.orderservice.id = this.route.snapshot.paramMap.get("id")
    this.findById()
  }

  update(): void {
    this.service.update(this.orderservice).subscribe(response => {
      this.service.message("Order service successfully updated !")
      this.router.navigate(["orderservices"])
    })
  }

  findById(): void {
    this.service.findById(this.orderservice.id).subscribe(response => {
      this.orderservice = response;
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