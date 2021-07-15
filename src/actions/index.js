import * as Types from "../constants/ActionTypes";
import apiCaller from "../utils/apiCller";

export const actFetchProducts = (products) => {
  return {
    type: Types.FETCH_PRODUCTS,
    products,
  };
};

export const actFetchProductRequest = () => {
  return (dispatch) => {
    return apiCaller("products", "GET", null).then((res) => {
      dispatch(actFetchProducts(res.data));
    });
  };
};

export const actDeleteProductRequest = (id) => {
  return (dispatch) => {
    return apiCaller(`products/${id}`, "DELETE", null).then((res) => {
      dispatch(actDeleteProduct(id));
    });
  };
};

export const actDeleteProduct = (id) => {
  return {
    type: Types.DELETE_PRODUCT,
    id,
  };
};
