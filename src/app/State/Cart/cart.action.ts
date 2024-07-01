import { createAction, props } from "@ngrx/store";

// ADD
export const addItemToCartRequest = createAction(
    '[Cart] Add Item to Cart Request',
    props<{reqData: any}>()
);
export const addItemToCartSuccess = createAction(
    '[Cart] Add Item to Cart Success',
    props<{payload: any}>()
);
export const addItemToCartFailure = createAction(
    '[Cart] Add Item to Cart Failure',
    props<{error: any}>()
);

// GET
export const getCartRequest = createAction(
    '[Cart] Get Cart Request',
);
export const getCartSuccess = createAction(
    '[Cart] Get Cart Success',
    props<{payload: any}>()
);
export const getCartFailure = createAction(
    '[Cart] Get Cart Failure',
    props<{error: any}>()
);

// REMOVE
export const removeCartItemRequest = createAction(
    '[Cart] Remove Cart Item Request',
    props<{reqData: any}>()
);
export const removeCartItemSuccess = createAction(
    '[Cart] Remove Cart Item Success',
    props<{cartItemId: any}>()
);
export const removeCartItemFailure = createAction(
    '[Cart] Remove Cart Item Failure',
    props<{error: any}>()
);

// UPDATE
export const updateCartItemRequest = createAction(
    '[Cart] Update Cart Item Request',
    props<{reqData: any}>()
);
export const updateCartItemSuccess = createAction(
    '[Cart] Update Cart Item Success',
    props<{payload: any}>()
);
export const updateCartItemFailure = createAction(
    '[Cart] Update Cart Item Failure',
    props<{error: any}>()
);