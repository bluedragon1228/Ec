import { Component } from '@angular/core';
import { lenghacholiPage2 } from '../../../../../Data/Saree/lenghaCholiPage2';
import { Route, Router } from '@angular/router';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrl: './product-details.component.scss'
})
export class ProductDetailsComponent {

  selectedSize:any;
  reviews = [1,1,1];
  relatedProducts: any;

  constructor(private router: Router){

  }

  ngOnInit(){
    this.relatedProducts = lenghacholiPage2;
  }

  handleAddToCart(){
    console.log("selected size : ", this.selectedSize);
    this.router.navigate([`cart`]);
  }

}

