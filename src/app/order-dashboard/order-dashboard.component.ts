import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { interval } from 'rxjs';

@Component({
  selector: 'app-order-dashboard',
  templateUrl: './order-dashboard.component.html',
  styleUrls: ['./order-dashboard.component.css']
})
export class OrderDashboardComponent implements OnInit {
  interval;
  lastOrder = 0;
  orders:number[] = []
  constructor() { }

  ngOnInit(): void {
  }


  onStartWorkday(){
    this.interval=setInterval(() => {
      this.lastOrder++;
      this.orders.push(this.orders.length +1)
    } ,2000)

  }

  onEndWorkday(){
    clearInterval(this.interval);
  }

}
