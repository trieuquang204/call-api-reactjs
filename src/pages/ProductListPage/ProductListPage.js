import React, { Component } from "react";
import ProductList from "../../components/ProductList/ProductList";
import ProductItem from "../../components/ProductItem/ProductItem";
import axios from "axios";

import { connect } from "react-redux";
import { Link } from "react-router-dom";
import {
  actFetchProductsRequest,
  actDeleteProductRequest,
} from "../../actions/index";

class ProductListPage extends Component {
  componentDidMount() {
    this.props.fetchAllProducts();
  }

  showProducts(products) {
    var result = null;
    if (products.length > 0) {
      result = products.map((product, index) => {
        return (
          <ProductItem
            key={index}
            product={product}
            index={index}
            onDelete={this.onDelete}
          />
        );
      });
    }
    return result;
  }

  onDelete = (id) => {
    this.props.onDeleteProduct(id);
  };

  render() {
    var { products } = this.props;
    axios({
      method: "GET",
      url: "http://localhost:3000/products",
    })
      .then((res) => {
        products = res.data;
      })
      .catch((err) => {
        console.log(err);
      });

    return (
      <div className="col-md-12">
        <Link to="/product/add" className="btn btn-info mt-3 mb-3">
          Them san pham
        </Link>
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

const mapDispatchToProps = (dispatch, props) => {
  return {
    fetchAllProducts: () => {
      dispatch(actFetchProductsRequest());
    },
    onDeleteProduct: (id) => {
      dispatch(actDeleteProductRequest(id));
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(ProductListPage);
