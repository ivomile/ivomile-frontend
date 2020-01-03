import { Component, OnInit } from '@angular/core';
import { ApiService } from '../../api.service';
import {NgForm} from "@angular/forms";

@Component({
  selector: 'app-new-order-nologin',
  templateUrl: './new-order-nologin.component.html',
  styleUrls: ['./new-order-nologin.component.css']
})

export class NewOrderNologinComponent implements OnInit {

  orders: any = [];
  constructor(private api: ApiService) {}

  typeElements = typeElements;
  packageElements = packageElements;
  timeElements = timeElements;

  selectedType: string = 'Azienda/Negozio';
  selectedTypeRecv: string = 'Privato';
  addressIdentical: boolean = true;
  formData: any;

  selectTypeChangeHandler (event: any) 
  {
    this.selectedType = event.target.value;
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

  selectTypeRecvChangeHandler (event: any) 
  {
    this.selectedTypeRecv = event.target.value;
  }

 addressIdenticalHandler (event: any) 
  {
    this.addressIdentical = event.target.value;
    this.addressIdentical = event.currentTarget.checked;
  }


  ngOnInit() {
  }

  onSubmit(form: NgForm) {
    console.log('Your form data : ', form.value);
  }
}


export const typeElements = [
  {
    name: 'Azienda/Negozio',
    id: 'az'
  },
  {
    name: 'Privato',
    id:'pr'
  }
];

export const packageElements = [
  {
    name: 'Pacco',
    id: 'pac'
  },
  {
    name: 'Cassetta',
    id:'cas'
  },
  {
    name: 'Busta',
    id:'bus'
  }
];


export const timeElements = [
  {
    name: '8:00',
    id: '8'
  },
  {
    name: '9:00',
    id: '8'
  },
  {
    name: '10:00',
    id: '8'
  },
  {
    name: '11:00',
    id: '8'
  },
  {
    name: '12:00',
    id: '8'
  },
  {
    name: '13:00',
    id: '8'
  },
  {
    name: '14:00',
    id: '8'
  },
  {
    name: '15:00',
    id: '8'
  },
  {
    name: '16:00',
    id: '8'
  },
  {
    name: '17:00',
    id: '8'
  },
  {
    name: '18:00',
    id: '8'
  },
  {
    name: '19:00',
    id: '8'
  },
  
  
];
