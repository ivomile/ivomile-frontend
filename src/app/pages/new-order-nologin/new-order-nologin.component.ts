import { Component, OnInit } from '@angular/core';
import { ApiService } from '../../api.service';
import { FormGroup, NgForm, Validators } from "@angular/forms";
import { Customer } from "../../shared/Customer";
import { Delivery } from "../../shared/Delivery";
import { Address } from "../../shared/Address";
import { Receiver } from "../../shared/Receiver";
import { Parcel } from "../../shared/Parcel";
import {Dimension} from "../../shared/Dimension";

@Component({
  selector: 'app-new-order-nologin',
  templateUrl: './new-order-nologin.component.html',
  styleUrls: ['./new-order-nologin.component.css']
})

export class NewOrderNologinComponent implements OnInit {

    orders: any = [];
    delivery: Delivery;
    customer: Customer;
    address: Address;
    form: FormGroup;
    parcel:Parcel[]=[];
    receiver: Receiver;
    tmpParcel: Parcel;
    dimension: Dimension;

    constructor(private api: ApiService) {
      this.delivery = new Delivery();
      this.customer = new Customer();
      this.address = new Address();
      this.receiver = new Receiver();
      this.dimension = new Dimension();

      this.parcel = new Array<Parcel>();
      this.tmpParcel = new Parcel();
      this.tmpParcel.dimension = this.dimension;
      this.delivery.packages = this.parcel;

      this.receiver.address = this.address;
      this.delivery.receiver = this.receiver;

      this.customer.address = this.address;
      this.delivery.customer = this.customer;
  }

  private prepareSave(): Delivery {
    return new Delivery().deserialize(this.form.value);
  }

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
    // this.getOrders();
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

  createOrders() {
    this.api.createOrder(this.delivery)
        .subscribe(data => {
          for (const d of (data as any)) {
            console.log(d);
          }
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
    console.log('Your form data : ', this.delivery);
    this.createOrders();

  }

  addParcel(form: NgForm) {
    this.tmpParcel.dimension = this.dimension;
    this.delivery.packages.push(this.tmpParcel);
    this.tmpParcel = new Parcel();
    this.dimension = new Dimension();
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
