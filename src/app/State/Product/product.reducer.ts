import { createReducer, on } from "@ngrx/store"
import { findProductsByCategoryFailure, findProductsByCategorySuccess, findProductsByIdFailure, findProductsByIdSuccess } from "./product.action"
import { state } from "@angular/animations"

const initialState={
    products:[],
    loading: false,
    error: null,
    product: null
}

export const productReducer=createReducer(
    initialState,
    on(findProductsByCategorySuccess,(state,{payload})=>({
        ...state,
        products: payload,
        content: payload.content,
        loading: false

    })),
    on(findProductsByIdSuccess,(state,{payload})=>({
        ...state,
        product: payload,
        loading: false

    })),
    on(findProductsByCategoryFailure,
        findProductsByIdFailure,(state,{error})=>({
        ...state,
        error:error,
        loading: false

    }))
)