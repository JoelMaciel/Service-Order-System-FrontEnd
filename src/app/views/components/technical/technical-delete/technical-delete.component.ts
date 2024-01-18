import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Technical } from 'src/app/models/technical';
import { TechnicalService } from 'src/app/services/technical.service';

@Component({
  selector: 'app-technical-delete',
  templateUrl: './technical-delete.component.html',
  styleUrls: ['./technical-delete.component.css']
})
export class TechnicalDeleteComponent implements OnInit {

  technical_id = '';

  technical: Technical = {
    id: " ",
    name: "",
    cpf: "",
    jobFunction: "",
    phoneNumber: ""
  }

  constructor(
    private router: Router,
    private service: TechnicalService,
    private route: ActivatedRoute

  ) { }

  ngOnInit(): void {
    this.technical_id = this.route.snapshot.paramMap.get('id')!
    this.findById();
  }


  findById(): void {
    this.service.findById(this.technical_id).subscribe(response => {
      this.technical = response;
    })
  }

  delete(): void {
    this.service.delete(this.technical_id).subscribe(response => {
      this.router.navigate(["technicians"])
      this.service.message("Technician successfully deleted")
    }, err => {
      if (err.error.error.match("has work orders")) {
        this.service.message(err.error.error)
      }
    })
  }


  cancel(): void {
    this.router.navigate(["technicians"])
  }

}
