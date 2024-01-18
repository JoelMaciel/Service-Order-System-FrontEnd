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

  message(msg: string): void {
    this.snackBar.open(`${msg}`, 'OK',
      {
        horizontalPosition: 'end',
        verticalPosition: 'top',
        duration: 4000
      })
  }

}
