import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Technical } from 'src/app/models/technical';
import { TechnicalService } from 'src/app/services/technical.service';

@Component({
  selector: 'app-technical-update',
  templateUrl: './technical-update.component.html',
  styleUrls: ['./technical-update.component.css']
})
export class TechnicalUpdateComponent implements OnInit {

  technical_id = '';


  technical: Technical = {
    id: " ",
    name: "",
    cpf: "",
    jobFunction: "",
    phoneNumber: ""
  }



  name = new FormControl('', [Validators.minLength(5)]);
  cpf = new FormControl('', [Validators.minLength(11)]);
  jobFunction = new FormControl('', [Validators.minLength(5)]);
  phoneNumber = new FormControl('', [Validators.minLength(11)]);
  

  constructor(
    private router: Router,
    private service: TechnicalService,
    private route: ActivatedRoute

  ) { }

  ngOnInit(): void {
    this.technical_id = this.route.snapshot.paramMap.get('id')!
    this.findById();
  }
  

  update(): void {
    this.service.update(this.technical).subscribe((response) => {
      this.router.navigate(["technicians"])
      this.service.message("Technician successfully updated !")

    })
  }

  findById(): void {
    this.service.findById(this.technical_id).subscribe(response => {
      this.technical = response;
    })
   }
   

  cancel(): void {
    this.router.navigate(["technicians"])
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

  errorValidJobFunction() {
    if (this.jobFunction.invalid) {
      return "The JobFunction must be between 5 and 50 characters long."
    }
    return false

  }

}
