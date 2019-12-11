import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-new-order-nologin',
  templateUrl: './new-order-nologin.component.html',
  styleUrls: ['./new-order-nologin.component.css']
})

export class NewOrderNologinComponent implements OnInit {
  typeElements = typeElements;

  selectedType: string = 'Azienda/Negozio';
  selectedTypeRecv: string = 'Privato';
  addressIdentical: boolean = true;

  selectTypeChangeHandler (event: any) 
  {
    this.selectedType = event.target.value;
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

