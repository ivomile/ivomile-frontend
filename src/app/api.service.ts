import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

// @ts-ignore
@Injectable({
  providedIn: 'root'
})

const localUrl = 'http://localhost:8080/deliveries/check';

export class ApiService {
  constructor(private http: HttpClient) { }

  getOrders() {
    return this.http.get(localUrl);
  }
}
