import * as types from '../constants/types';

export function getProducts() {
  return dispatch => {
    fetch(`products.json`)
      .then(response => response.json())
      .then(response => {
        dispatch({
          type: types.FETCH_PRODUCTS,
          payload: response.products
        });
      })
  }
}

export function compare(product) {
  return {type: types.COMPARE_PRODUCT, product};
}
