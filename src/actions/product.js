import * as types from '../constants/types';

export function getProducts() {
  return dispatch => {
    fetch(`${process.env.REACT_APP_API_URL}/v1/api/products`)
      .then(response => response.json())
      .then(response => {
        dispatch({
          type: types.FETCH_PRODUCTS,
          payload: response
        });
      })
  }
}

export function compare(product) {
  return {type: types.COMPARE_PRODUCT, product};
}