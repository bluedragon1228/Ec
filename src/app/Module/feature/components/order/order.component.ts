import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-order',
  templateUrl: './order.component.html',
  styleUrl: './order.component.scss'
})
export class OrderComponent {
  
  constructor(private router: Router){}

  orderFilter = [
    {order:"on_the _way", label:"On The Way"},
    {order:"delivered", label:"Delivered"},
    {order:"cancelled", label:"Cancelled"},
    {order:"returned", label:"Returned"},
  ]
  orders = [[1,1],[1,1,1]];

  navigateToOrderDetails = (id:Number) => {
    this.router.navigate([`/order/${id}`]);
  }

}
