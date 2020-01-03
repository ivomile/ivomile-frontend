import { Component, OnInit } from '@angular/core';
import {ApiService} from "../../api.service";

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css']
})
export class SignUpComponent implements OnInit {

  orders: any = [];
  constructor(private api: ApiService) {}

  ngOnInit() {
    this.loginApi();
  }

  loginApi() {
    this.api.login().subscribe(data => {
        for (const d of (data as any)) {
            this.orders.push({
                name: d.name,
                price: d.price
            });
        }
        console.log(this.orders);
    });

  }

}

