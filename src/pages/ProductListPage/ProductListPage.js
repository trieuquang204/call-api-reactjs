import React, { Component } from "react";
import ProductList from "../../components/ProductList/ProductList";
import ProductItem from "../../components/ProductItem/ProductItem";
import axios from "axios";
import callApi from '../../utils/apiCaller';

import { connect } from "react-redux";

class ProductListPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      products: [],
    };
  }

  componentDidMount() {
    callApi('products', 'GET', null).then(res => {
      this.setState({
        products: res.data
      })
    })
  }

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
    // var {products} = this.props;
    var products = this.state.products;
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
        <button className="btn btn-info mt-3 mb-3">Them san pham</button>
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

export default connect(mapStateToProps, null)(ProductListPage);
