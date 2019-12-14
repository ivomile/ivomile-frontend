import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

// @ts-ignore
@Injectable({
  providedIn: 'root'
})

const localUrl = 'http://ec2-35-180-201-108.eu-west-3.compute.amazonaws.com:8080/deliveries';

export class ApiService {
  constructor(private http: HttpClient) { }

  getOrders() {
    return this.http.get(localUrl);
  }
}
