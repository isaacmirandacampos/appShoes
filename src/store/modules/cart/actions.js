export function addToCartRequest(id) {
  return {
    type: '@cart/ADD_REQUEST',
    id,
  };
}

export function addToCartSuccess(product) {
  return {
    type: '@cart/ADD_SUCCESS',
    product,
  };
}

export function UpdateAmountRequest(id) {
  return {
    type: '@cart/UPDATE_AMOUNT_REQUEST',
    id,
  };
}

export function UpdateAmountSuccess(product) {
  return {
    type: '@cart/UPDATE_AMOUNT_SUCCESS',
    product,
  };
}
