import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { environment } from 'src/environments/environment';
import { Customer } from '../models/customer';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CustomerService {

  baseUrl: String = environment.baseUrl;

  constructor(
    private http: HttpClient,
    private snackBar: MatSnackBar
  ) { }

  findAll(): Observable<Customer[]> {
    const url = this.baseUrl + "/customers";
    return this.http.get<Customer[]>(url);
  }

  create(customer: Customer): Observable<Customer> {
    const url = this.baseUrl + "/customers";
    return this.http.post<Customer>(url, customer)
  }

  update(customer: Customer): Observable<Customer> {
    const url = `${this.baseUrl}/customers/${customer.id}`;
    return this.http.patch<Customer>(url, customer);
  }

  findById(id: any): Observable<Customer> {
    const url = `${this.baseUrl}/customers/${id}`;
    return this.http.get<Customer>(url);

  }

  delete(id: any): Observable<void> {
    const url = `${this.baseUrl}/customers/${id}`;
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
