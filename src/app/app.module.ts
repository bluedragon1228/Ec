import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { FeatureModule } from './Module/feature/feature.module';
import { SharedModule } from './Module/shared/shared.module';
import { AdminModule } from './Module/admin/admin.module';
import { StoreModule } from '@ngrx/store';
import { AuthModule } from './Module/auth/auth.module';
import { authReducer } from './State/Auth/auth.reducer';
import { userReducer } from './State/User/user.reducer';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { productReducer } from './State/Product/product.reducer';
import { cartReducer } from './State/Cart/cart.reducer';
import { orderReducer } from './State/Order/order.reducer';


@NgModule({
  declarations: [
    AppComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FeatureModule,
    SharedModule,
    AdminModule,
    AuthModule,
    HttpClientModule,
    StoreModule.forRoot(
      {
        auth: authReducer,
        user: userReducer,
        product: productReducer,
        cart: cartReducer,
        order: orderReducer
      },
      {})
  ],
  providers: [
    provideAnimationsAsync()
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
