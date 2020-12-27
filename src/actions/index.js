import * as types from "../constants/ActionTypes";
import callApi from "../utils/apiCaller";

export const actFetchProducts = (products) => {
  return {
    type: types.FETCH_PRODUCTS,
    products,
  };
};

export const actFetchProductsRequest = () => {
  return (dispatch) => {
    return callApi('products', 'GET', null).then(res => {
      dispatch(actFetchProducts(res.data))
    })
  };
};
