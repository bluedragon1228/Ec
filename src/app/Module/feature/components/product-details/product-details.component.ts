import { Component } from '@angular/core';
import { lenghacholiPage2 } from '../../../../../Data/Saree/lenghaCholiPage2';
import { ActivatedRoute, Route, Router } from '@angular/router';
import { ProductService } from '../../../../State/Product/product.service';
import { Store, select } from '@ngrx/store';
import { AppState } from '../../../../Models/AppState';
import { CartService } from '../../../../State/Cart/cart.service';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrl: './product-details.component.scss'
})
export class ProductDetailsComponent {

  selectedSize:any;
  reviews = [1,1,1];
  relatedProducts: any;
  // store: any;
  // products: any;
  product: any;
  productId:any

  constructor(private router: Router,
     private productService: ProductService,
     private store: Store<AppState>,
     private activatedRoute: ActivatedRoute,
     private cartService: CartService
     ){

  }

  ngOnInit(){
    this.relatedProducts = lenghacholiPage2;
    const id=this.activatedRoute.snapshot.paramMap.get("id");

    this.productService.findProductsById(id);
    this.productId = id;
    this.store.pipe(select((store) => store.product)).subscribe((product)=>{
      this.product = product?.product;
      console.log("Store Data", product.product);
      
    });
  }

  handleAddToCart(){
    console.log("selected size : ", this.selectedSize);
    const data = {size: this.selectedSize, productId: this.productId}
    this.cartService.addItemToCart(data)
    this.cartService.getCart()
    this.router.navigate([`cart`]);
  }

}

