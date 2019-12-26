import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { HttpClientModule } from '@angular/common/http';

const localUrl = 'http://localhost:8080/deliveries';


// @ts-ignore
@Injectable({
  providedIn: 'root'
})

export class ApiService {
  constructor(private http: HttpClient) { }

  getOrders() {
    return this.http.get(localUrl);
  }
}
