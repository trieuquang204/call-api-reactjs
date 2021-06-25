import React, { Component } from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import ProductItem from "../../components/ProductItem/ProductItem";
import ProductList from "../../components/ProductList/ProductList";
import apiCaller from "../../utils/apiCller";
import { actFetchProductRequest } from "../../actions";
class ProductListPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      products: [],
    };
  }

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
    let { products } = this.state;
    apiCaller(`products/${id}`, "DELETE", null).then((res) => {
      if (res.status === 200) {
        let index = this.findIndex(products, id);
        if (index !== -1) {
          products.splice(index, 1);
          this.setState({
            products: products,
          });
        }
      }
    });
  };

  findIndex = (products, id) => {
    let result = -1;
    products.forEach((product, index) => {
      if (product.id === id) {
        result = index;
      }
    });
    return result;
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
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(ProductListPage);
