import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Customer } from 'src/app/models/customer';
import { CustomerService } from 'src/app/services/customer.service';

@Component({
  selector: 'app-customer-delete',
  templateUrl: './customer-delete.component.html',
  styleUrls: ['./customer-delete.component.css']
})
export class CustomerDeleteComponent implements OnInit {

  
  customer_id = '';

  customer: Customer = {
    id: " ",
    name: "",
    cnpj: "",
    phoneNumber: ""
  }

  constructor(
    private router: Router,
    private service: CustomerService,
    private route: ActivatedRoute

  ) { }

  ngOnInit(): void {
    this.customer_id = this.route.snapshot.paramMap.get('id')!
    this.findById();
  }


  findById(): void {
    this.service.findById(this.customer_id).subscribe(response => {
      this.customer = response;
    })
  }
  delete(): void {
    this.service.delete(this.customer_id).subscribe(
      response => {
        this.router.navigate(["customers"]);
        this.service.message("Customers successfully deleted");
      },
      err => {
        if (err.error.detail.includes("pending service order")) {
          this.service.message(err.error.detail);
        }
      }
    );
  }


  cancel(): void {
    this.router.navigate(["customers"])
  }

}
