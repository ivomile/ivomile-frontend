import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-order-recap-nologin',
  templateUrl: './order-recap-nologin.component.html',
  styleUrls: ['./order-recap-nologin.component.css']
})
export class OrderRecapNologinComponent implements OnInit {
  tracking_sender   = "873538735";
  tracking_receiver = "723575271";


  constructor() { }

  ngOnInit() {
  }

}