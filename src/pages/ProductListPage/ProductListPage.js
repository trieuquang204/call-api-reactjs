import React, { Component } from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import ProductItem from "../../components/ProductItem/ProductItem";
import ProductList from "../../components/ProductList/ProductList";
import { actDeleteProductRequest, actFetchProductRequest } from "../../actions";
class ProductListPage extends Component {
  componentDidMount() {
    this.props.fetchAllProducts();
  }

  showProducts = (products) => {
    let result = null;
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
  };

  onDelete = (id) => {
    this.props.onDeleteProduct(id);
  };

  render() {
    let { products } = this.props;
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

const mapDispatchToProps = (dispatch, props) => {
  return {
    fetchAllProducts: () => {
      dispatch(actFetchProductRequest());
    },
    onDeleteProduct: (id) => {
      dispatch(actDeleteProductRequest(id));
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(ProductListPage);
