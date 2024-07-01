import { Injectable } from "@angular/core";
import { BASE_API_URL } from "../../config/api";
import { HttpClient, HttpHeaders, HttpParams } from "@angular/common/http";
import { Store } from "@ngrx/store";
import { ActivatedRoute, Route, Router } from "@angular/router";
import { catchError, map, of } from "rxjs";
import { createOrderFailure, createOrderSuccess, getOrderByIdFailure, getOrderByIdSuccess, getOrderHistoryFailure, getOrderHistoryRequest, getOrderHistorySuccess } from "./order.action";

@Injectable({
    providedIn: 'root'
})

export class OrderService{
    API_BASE_URL = BASE_API_URL;
    private headers;

    constructor(
        private store:Store,
        private http: HttpClient,
        private router: Router,
        private route: ActivatedRoute
    ){
        this.headers = new HttpHeaders({
            'Content-Type': 'application/json',
            Authorization: `Bearer ${localStorage.getItem('jwt')}`
        });
    }

    createOrder(reqData: any){
        const url =`${this.API_BASE_URL}/api/orders/`;

        return this.http.post(url,reqData, {headers: this.headers}).pipe(
                map((data: any)=>{
                    if(data.id){
                        // step = 3
                        this.router.navigate([`/checkout/payment/${data.id}`],{
                            queryParams: {step: '3', order_id: data.id},
                        });
                    }

                    console.log("created order", data);
                    return createOrderSuccess({order:data});
                }),
                catchError((error: any) =>{
                    console.log("catch error ", error);
                    
                    return of(createOrderFailure(
                        error.response && error.response.data.message?
                        error.response.data.message : error.message
                    ))
                })
            ).subscribe((action) => this.store.dispatch(action));
    }

    getOrderById(orderId: string){        
        const url =`${this.API_BASE_URL}/api/orders/${orderId}`;

        return this.http.get(url, {headers: this.headers}).pipe(
                map((data: any)=>{                 
                    console.log("order by id: ", data );
                    
                    return getOrderByIdSuccess({order:data});
                }),
                catchError((error: any) =>{
                    return of(getOrderByIdFailure(
                        error.response && error.response.data.message?
                        error.response.data.message : error.message
                    ))
                })
            ).subscribe((action) => this.store.dispatch(action));
    }

    getOrderHistory(cartItemId: Number){
        const url =`${this.API_BASE_URL}/api/orders/user`;

        return this.http.get(url, {headers: this.headers}).pipe(
                map((data: any)=>{
                    console.log("order history: ", data);
                    
                    return getOrderHistorySuccess({orders:data});
                }),
                catchError((error: any) =>{
                    return of(getOrderHistoryFailure(
                        error.response && error.response.data.message?
                        error.response.data.message : error.message
                    ))
                })
            ).subscribe((action) => this.store.dispatch(action));
    
    }

}
