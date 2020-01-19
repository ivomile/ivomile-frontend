import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import { map } from "rxjs/operators";
import {Delivery} from "./shared/Delivery";


const localUrl = 'http://localhost:8080';
//const localUrl = 'http://curio.eu-west-3.elasticbeanstalk.com';

const loginUrl = localUrl + '/login';
const createOrder = localUrl + '/deliveries';
const listOrderUrl = localUrl + '/deliveries';


// @ts-ignore
@Injectable({
  providedIn: 'root'
})

export class ApiService {
  constructor(private http: HttpClient) { }

  getOrders() {
    return this.http.get(listOrderUrl);
  }
  model: any = {};

  login() {

    this.model.username = 'admin';
    this.model.password = 'password';

    const headers = new HttpHeaders({ Authorization: "Basic YWRtaW46cGFzc3dvcmQ="});

    return this.http.post(loginUrl, {
      userName: this.model.username,
      password: this.model.password
    }, {headers})

  }

  createOrder(delivery: Delivery) {
    return this.http.post(createOrder, delivery)
  }

}
