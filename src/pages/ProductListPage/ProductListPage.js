import React, { Component } from "react";
import ProductItem from "../../components/ProductItem/ProductItem";
import ProductList from "../../components/ProductList/ProductList";
import { connect } from "react-redux";
import apiCaller from "../../utils/apiCller";
import { Link } from "react-router-dom";

class ProductListPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      products: [],
    };
  }

  componentDidMount() {
    apiCaller("products", "GET", null).then((res) => {
      this.setState({
        products: res.data,
      });
    });
  }

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
    let { products } = this.state;
    return (
      <div className="col-12">
        <Link to="/product/add" className="btn btn-info mb-10">
          Them san pam
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

export default connect(mapStateToProps)(ProductListPage);
