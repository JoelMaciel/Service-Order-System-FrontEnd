import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { OrderService } from '../models/orderservice';

@Injectable({
  providedIn: 'root'
})
export class OrderservicesService {


  baseUrl: String = environment.baseUrl;

  constructor(
    private http: HttpClient,
    private snackBar: MatSnackBar
  ) { }

  findAll(): Observable<OrderService[]> {
    const url = this.baseUrl + "/orderServices";
    return this.http.get<OrderService[]>(url);
  }

  create(orderservice: OrderService): Observable<OrderService> {
    const url = this.baseUrl + "/orderServices";
    return this.http.post<OrderService>(url, orderservice)
  }

  update(orderservice: OrderService): Observable<OrderService> {
    const url = `${this.baseUrl}/orderServices/${orderservice.id}`;
    return this.http.patch<OrderService>(url, orderservice);
  }

  findById(id: any): Observable<OrderService> {
    const url = `${this.baseUrl}/orderServices/${id}`;
    return this.http.get<OrderService>(url);

  }

  delete(id: any): Observable<void> {
    const url = `${this.baseUrl}/orderServices/${id}`;
    return this.http.delete<void>(url);
  }

  message(msg: string): void {
    this.snackBar.open(`${msg}`, 'Thanks You',
      {
        horizontalPosition: 'end',
        verticalPosition: 'top',
        duration: 4000
      })
  }

}
