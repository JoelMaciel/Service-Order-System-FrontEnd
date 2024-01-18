import { AfterViewInit, Component, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { Router } from '@angular/router';
import { Technical } from 'src/app/models/technical';
import { TechnicalService } from 'src/app/services/technical.service';

@Component({
  selector: 'app-technical-read',
  templateUrl: './technical-read.component.html',
  styleUrls: ['./technical-read.component.css']
})
export class TechnicalReadComponent implements AfterViewInit {

  technicians: Technical[] = []

  displayedColumns: string[] = ['id', 'name', 'cpf', 'phoneNumber', 'jobFunction'];
  dataSource = new MatTableDataSource<Technical>(this.technicians);


  @ViewChild(MatPaginator) paginator!: MatPaginator;

  constructor(
    private service: TechnicalService,
    private router: Router
   ) {}

  ngAfterViewInit() {
   
    this.findAll();
  }

  findAll() : void {
    this.service.findAll().subscribe((response) => {
      this.technicians = response;
      this.dataSource = new MatTableDataSource<Technical>(this.technicians);
      this.dataSource.paginator = this.paginator;
      
    })
  }

  navigateToCreate(): void {
    this.router.navigate(["technicians/create"])

  }

}

export interface PeriodicElement {
  name: string;
  position: number;
  weight: number;
  symbol: string;
}


