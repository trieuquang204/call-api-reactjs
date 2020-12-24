import React, { Component } from "react";
import ProductList from "../../components/ProductList/ProductList";
import ProductItem from "../../components/ProductItem/ProductItem";

import { connect } from 'react-redux';

class ProductListPage extends Component {
  showProducts(products) {
    var result = null;
    if (products.length > 0) {
      result = products.map((product, index) => {
        return <ProductItem key={index} product={product} index={index} />;
      });
    }
    return result;
  }

  render() {
    var {products} = this.props;
    return (
      <div className="col-md-12">
        <button className="btn btn-info mt-3 mb-3">Them san pham</button>
        <ProductList>{this.showProducts(products)}</ProductList>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    products : state.products
  }
}

export default connect(mapStateToProps, null)(ProductListPage);
