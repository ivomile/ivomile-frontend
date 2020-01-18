import { Component, OnInit } from '@angular/core';
import { ApiService } from '../../api.service';
import {FormControl, FormGroup, NgForm, Validators} from "@angular/forms";
import { Customer } from "../../shared/Customer";
import { Delivery } from "../../shared/Delivery";
import { Address } from "../../shared/Address";
import { Receiver } from "../../shared/Receiver";
import { Parcel } from "../../shared/Parcel";
import {Dimension} from "../../shared/Dimension";
import {TooltipPosition} from "@angular/material/tooltip";

@Component({
  selector: 'app-new-order-nologin',
  templateUrl: './new-order-nologin.component.html',
  styleUrls: ['./new-order-nologin.component.css']
})

export class NewOrderNologinComponent implements OnInit {

  positionOptions: TooltipPosition[] = ['right'];
  position = new FormControl(this.positionOptions[0]);

  orders: any = [];
  delivery: Delivery;
  customer: Customer;
  address: Address;
  form: FormGroup;
  parcel:Parcel[]=[];
  receiver: Receiver;
  tmpParcel: Parcel;
  dimension: Dimension;
  panelOpenState: boolean;
  expandedV1: any;

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

      this.receiver.address = new Address();
      this.delivery.receiver = this.receiver;

      this.customer.address = new Address();
      this.delivery.customer = this.customer;
      this.panelOpenState = true;
      this.expandedV1 = true; // this is to control open/close operation

      this.oneHourPrice = '5€';
      this.twoHourPrice = '10€';
      this.twoHourIntervalPrice = '12€';
      this.fourHourIntervalPrice = '5€';
      this.standardDeliveryTime = '4€';
    }

  private prepareSave(): Delivery {
    return new Delivery().deserialize(this.form.value);
  }

  typeElements = typeElements;
  packageElements = packageElements;
  timeElements = timeElements;

  selectedType: string = '';
  selectedTypeRecv: string = 'Privato';
  addressIdentical: boolean = true;
  formData: any;
  oneHourPrice: any;
  twoHourPrice: any;
  twoHourIntervalPrice: any;
  fourHourIntervalPrice: any;
  standardDeliveryTime: any;

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
    if (Object.keys(this.tmpParcel).length > 0){
      this.parcel.push(this.tmpParcel);
    }
    console.log('Your form data : ', this.delivery);
    this.createOrders();
    this.tmpParcel = new Parcel();
    while (this.parcel.length > 0)
      this.parcel.pop();
  }

  addParcel(form: NgForm) {
    this.tmpParcel.dimension = this.dimension;
    this.delivery.packages.push(this.tmpParcel);
    this.tmpParcel = new Parcel();
    this.dimension = new Dimension();
  }

  deleteParcel(i: number) {
    this.delivery.packages.splice(+i, 1);
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
