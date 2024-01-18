import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Technical } from '../models/technical';
import { MatSnackBar } from '@angular/material/snack-bar';


@Injectable({
  providedIn: 'root'
})
export class TechnicalService {

  baseUrl: String = environment.baseUrl;

  constructor(
    private http: HttpClient,
    private snackBar: MatSnackBar
  ) { }

  findAll(): Observable<Technical[]> {
    const url = this.baseUrl + "/technicians";
    return this.http.get<Technical[]>(url);
  }

  create(technical: Technical): Observable<Technical> {
    const url = this.baseUrl + "/technicians";
    return this.http.post<Technical>(url, technical)
  }

  update(technical: Technical): Observable<Technical> {
    const url = `${this.baseUrl}/technicians/${technical.id}`;
    return this.http.patch<Technical>(url, technical);
  }

  findById(id: any): Observable<Technical> {
    const url = `${this.baseUrl}/technicians/${id}`;
    return this.http.get<Technical>(url);

  }

  delete(id: any): Observable<void> {
    const url = `${this.baseUrl}/technicians/${id}`;
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
