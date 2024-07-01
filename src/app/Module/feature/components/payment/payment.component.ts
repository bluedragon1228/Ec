import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { OrderService } from '../../../../State/Order/order.service';
import { Store, select } from '@ngrx/store';
import { AppState } from '../../../../Models/AppState';
import { PaymentService } from '../../../../State/Payment/payment.service';

@Component({
  selector: 'app-payment',
  templateUrl: './payment.component.html',
  styleUrl: './payment.component.scss'
})
export class PaymentComponent {
  
  order: any;
  products = [1,1,1];
  
  constructor(private activatedRoute: ActivatedRoute,
    private orderService: OrderService,
    private store: Store<AppState>,
    private paymentService: PaymentService
    ){
      
    }
    
    ngOnInit(){
      let id = this.activatedRoute.snapshot.paramMap.get("id");
      console.log("ID: " , id);
      
      if (id) {
        this.orderService.getOrderById(id);
      }
      
      this.store.pipe(select(store=>store.order)).subscribe((order)=>{
      this.order = order.order
    })
  }
  
  redirectToPayment = () => {
    if (this.order.id) {
      this.paymentService.createPayment(this.order.id)
    }
  }


}
