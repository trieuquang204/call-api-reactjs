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

export const actAddProductRequest = (product) => {
  return (dispatch) => {
    return apiCaller("products", "POST", product).then((res) => {
      dispatch(actAddProduct(res.data));
    });
  };
};

export const actAddProduct = (product) => {
  return {
    type: Types.ADD_PRODUCTS,
    product,
  };
};

export const actGetProductRequest = (id) => {
  return (dispatch) => {
    return apiCaller(`products/${id}`, "GET", null).then((res) => {
      dispatch(actGetProduct(res.data));
    });
  };
};

export const actGetProduct = (product) => {
  return {
    type: Types.EDIT_PRODUCT,
    product,
  };
};
