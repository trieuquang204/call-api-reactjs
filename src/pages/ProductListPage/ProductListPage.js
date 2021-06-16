import React, { Component } from "react";
import ProductItem from "../../components/ProductItem/ProductItem";
import ProductList from "../../components/ProductList/ProductList";

import { connect } from "react-redux";

class ProductListPage extends Component {
  showProducts = (products) => {
    let result = null;
    if (products.length > 0) {
      result = products.map((product, index) => {
        return <ProductItem key={index} product={product} index={index} />;
      });
    }
    return result;
  };

  render() {
    let { products } = this.props;
    return (
      <div className="col-12">
        <button type="button" className="btn btn-info mb-10">
          Them san pam
        </button>
        <ProductList>{this.showProducts(products)}</ProductList>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    products: state.products,
  };
};

export default connect(mapStateToProps)(ProductListPage);
