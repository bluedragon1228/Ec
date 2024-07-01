import { createReducer, on } from "@ngrx/store"
import * as OrderActions from './order.action'

export interface OrderState{
    orders: any[];
    loading: boolean;
    error: string | null;
    order: any | null;
}
const initialState: OrderState={
    orders:[],
    loading: false,
    error: null,
    order: null
};

export const orderReducer=createReducer(
    initialState,
    // ADD
    on(OrderActions.createOrdeRequest,
        OrderActions.getOrderByIdRequest,
        OrderActions.getOrderHistoryRequest, (state)=>({
        ...state,
        loading: true,
        error: null

    })),
    on(OrderActions.createOrderSuccess,(state,{order})=>({
        ...state,
        loading: false,
        // order OR order: order
        order: order
    })),
    on(OrderActions.createOrderFailure ,
        OrderActions.getOrderByIdFailure,
        OrderActions.getOrderHistoryFailure, (state,{error})=>({
        ...state,
        loading: false,
        error,
    })),
    
    on(OrderActions.getOrderByIdSuccess,(state,{order})=>({
        ...state,
        loading: false,
        // order OR order: order
        order: order
    })),
    
    on(OrderActions.getOrderHistorySuccess,(state,{orders})=>({
        ...state,
        loading: false,
        // order OR order: order
        orders: orders
    })),
   
)