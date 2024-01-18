import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Technical } from 'src/app/models/technical';
import { TechnicalService } from 'src/app/services/technical.service';

@Component({
  selector: 'app-technical-create',
  templateUrl: './technical-create.component.html',
  styleUrls: ['./technical-create.component.css']
})
export class TechnicalCreateComponent implements OnInit {

  technical: Technical = {
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
    private service: TechnicalService

  ) { }

  ngOnInit(): void {
  }

  create(): void {
    this.service.create(this.technical).subscribe((response) => {
      this.router.navigate(["technicians"])
      this.service.message("Technician successfully created!")
    }, err => {
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

  
  errorValidCpf
  () {
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
    this.router.navigate(["technicians"])
  }

}
