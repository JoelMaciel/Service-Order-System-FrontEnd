import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Customer } from 'src/app/models/customer';
import { CustomerService } from 'src/app/services/customer.service';
import { TechnicalService } from 'src/app/services/technical.service';

@Component({
  selector: 'app-customer-create',
  templateUrl: './customer-create.component.html',
  styleUrls: ['./customer-create.component.css']
})
export class CustomerCreateComponent implements OnInit {

  
  customer: Customer = {
    id: " ",
    name: "",
    cpf: "",
    phoneNumber: ""
  }

  name = new FormControl('', [Validators.minLength(5)]);
  cpf = new FormControl('', [Validators.minLength(11)]);
  phoneNumber = new FormControl('', [Validators.minLength(11)]);



  constructor(
    private router: Router,
    private service: CustomerService

  ) { }

  ngOnInit(): void {
  }

  create(): void {
    this.service.create(this.customer).subscribe((response) => {
      this.router.navigate(["customers"])
      this.service.message("Customer successfully created!")
    }, err => {
      console.log(err);
      
      if (err.error.detail.match("already registered")) {
        this.service.message(err.error.detail)
      } else if (err.error.objects[0].userMessage === "Invalid CPF format. Correct format xxx.xxx.xxx-xx") {
        this.service.message(
          "Invalid CPF.")
      } else {
        console.log(err);

      }
    })
  }

  errorValidName() {
    if (this.name.invalid) {
      return "The name must contain a minimum of 5 and a maximum of 30 characters"
    }
    return false

  }


  errorValidCpf() {
    if (this.cpf.invalid) {
      return "The CPF must be between 11 and 15 characters long."
    }
    return false

  }


  errorValidPhoneNumber() {
    if (this.phoneNumber.invalid) {
      return "The PhoneNumber must be between 11 and 18 characters long."
    }
    return false

  }


  cancel(): void {
    this.router.navigate(["customers"])
  }
}
