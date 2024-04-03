import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-cart-item',
  templateUrl: './cart-item.component.html',
  styleUrl: './cart-item.component.scss'
})
export class CartItemComponent {
  
  @Input() showButton : any;

  updateCartItem(num: Number){
    console.log("number", num);
  }
  
  removeCartItem() {
    console.log("Cart Item Removed");
    
  }
  

}
