import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-new-order-nologin',
  templateUrl: './new-order-nologin.component.html',
  styleUrls: ['./new-order-nologin.component.css']
})

export class NewOrderNologinComponent implements OnInit {
  typeElements = typeElements;

  selectedType: string = 'Azienda/Negozio';
  addressIdentical: string = 'yes';

  selectTypeChangeHandler (event: any) 
  {
    this.selectedType = event.target.value;
  }

 addressIdentical (event: any) 
  {
    this.addressIdentical = event.target.value;
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

