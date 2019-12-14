import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})

const localUrl = 'assets/data/smartphone.json';

export class ApiService {
  constructor(private http: HttpClient) { }

  getSmartphone() {
    return this.http.get(localUrl);
  }
}
