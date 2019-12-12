import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-new-order-nologin',
  templateUrl: './new-order-nologin.component.html',
  styleUrls: ['./new-order-nologin.component.css']
})

export class NewOrderNologinComponent implements OnInit {
  typeElements = typeElements;
  packageElements = packageElements;
  timeElements = timeElements;

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