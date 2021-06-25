import * as Types from "../constants/ActionTypes";
import apiCaller from "../utils/apiCller";

export const actFetchProductRequest = () => {
  return (dispatch) => {
    return apiCaller("product", "GET", null).then((res) => {
      dispatch(actFetchProducts(res.data));
    });
  };
};

export const actFetchProducts = (products) => {
  return {
    type: Types.FETCH_PRODUCTS,
    products,
  };
};
