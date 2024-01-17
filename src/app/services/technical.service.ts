import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Technical } from '../models/technical';

@Injectable({
  providedIn: 'root'
})
export class TechnicalService {

  baseUrl: String = environment.baseUrl;

  constructor(private http: HttpClient) { }

  findAll(): Observable<Technical[]> {
    const url = this.baseUrl + "/technicians";
    return this.http.get<Technical[]>(url);
  }
}
