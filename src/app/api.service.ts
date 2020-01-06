import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import { map } from "rxjs/operators";
import {Delivery} from "./shared/Delivery";


const localUrl = 'http://localhost:8080/deliveries';
// const localUrl = 'http://blinklastmile-env.tygfir3fqy.eu-west-3.elasticbeanstalk.com/deliveries';

const loginUrl = 'http://localhost:8080/login';
const createOrder = 'http://localhost:8080/deliveries';


// @ts-ignore
@Injectable({
  providedIn: 'root'
})

export class ApiService {
  constructor(private http: HttpClient) { }

  getOrders() {
    const headers = new HttpHeaders({ Authorization: "Basic YWRtaW46cGFzc3dvcmQ="});
    return this.http.get(localUrl, {headers});
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
    const headers = new HttpHeaders({ Authorization: "Basic YWRtaW46cGFzc3dvcmQ="});
    return this.http.post(createOrder, delivery, {headers})
  }

}
