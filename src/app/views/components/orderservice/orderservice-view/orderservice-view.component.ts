import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { OrderService } from 'src/app/models/orderservice';
import { OrderservicesService } from 'src/app/services/orderservices.service';

@Component({
  selector: 'app-orderservice-view',
  templateUrl: './orderservice-view.component.html',
  styleUrls: ['./orderservice-view.component.css']
})
export class OrderserviceViewComponent implements OnInit {


  orderservice: OrderService = {
    technician: "",
    customer: "",
    observation: "",
    status: "",
    priority: "",
    openingDate: "",
    closingDate: ""
  }

  constructor(
    private route: ActivatedRoute,
    private service: OrderservicesService,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.orderservice.id = this.route.snapshot.paramMap.get("id");
    this.findById();
  }

  findById(): void {
    this.service.findById(this.orderservice.id).subscribe(response => {
      this.orderservice = response;
    })
  }

  return():void {
    this.router.navigate(["orderservices"])
  }

}
