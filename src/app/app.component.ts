import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  onIntervalFired(orderNumber: number) {
    // if(orderNumber <= 5) {
    //   this.firstFiveOrders.push(orderNumber)
    // }else{
    //   this.allOtherOrders.push(orderNumber)
    // }

  }


}
