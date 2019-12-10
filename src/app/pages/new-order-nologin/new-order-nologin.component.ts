import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-new-order-nologin',
  templateUrl: './new-order-nologin.component.html',
  styleUrls: ['./new-order-nologin.component.css']
})
export class NewOrderNologinComponent implements OnInit {

  constructor() { }


  ngOnInit() {
  }

  typeClick() {
    
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