import { Component, OnInit } from '@angular/core';
import { ApiService } from '../../api.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  orders: any = [];
  constructor(private api: ApiService) {}

  ngOnInit() {
    this.getOrders();
  }

  getOrders() {
    this.api.getOrders()
        .subscribe(data => {
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
