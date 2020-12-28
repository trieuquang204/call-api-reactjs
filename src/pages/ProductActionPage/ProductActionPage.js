import React, { Component } from "react";
import { Link } from "react-router-dom";
import {
  actAddProductRequest,
  actGetProductRequest,
  actUpdatetProductRequest,
} from "../../actions/index";
import { connect } from "react-redux";

class ProductActionPage extends Component {
  constructor(props) {
    super(props);

    this.state = {
      id: "",
      txtName: "",
      txtPrice: "",
      checkStatus: "",
    };
  }

  componentDidMount() {
    var { match } = this.props;
    if (match) {
      var id = match.params.id;
      this.props.onEditProduct(id);
    }
  }

  componentWillReceiveProps(nextprops) {
    if (nextprops && nextprops.itemEditting) {
      var { itemEditting } = nextprops;
      this.setState({
        id: itemEditting.id,
        txtName: itemEditting.name,
        txtPrice: itemEditting.price,
        checkStatus: itemEditting.status,
      });
    }
  }

  onChange = (event) => {
    var target = event.target;
    var name = target.name;
    var value = target.type === "checkbox" ? target.checked : target.value;
    this.setState({
      [name]: value,
    });
  };

  onSave = (e) => {
    e.preventDefault();
    var { id, txtName, txtPrice, checkStatus } = this.state;
    var { history } = this.props;

    var product = {
      id: id,
      name: txtName,
      price: txtPrice,
      status: checkStatus,
    };

    if (id) {
      this.props.onUpdateProduct(product);
    } else {
      this.props.onAddProduct(product);
    }
    history.goBack();
  };

  render() {
    var { txtName, txtPrice, checkStatus } = this.state;
    return (
      <div className="col-md-6">
        <form onSubmit={this.onSave}>
          <div className="form-group">
            <label>Ten san pham:</label>
            <input
              type="text"
              className="form-control"
              name="txtName"
              value={txtName}
              onChange={this.onChange}
            />
          </div>
          <div className="form-group">
            <label>Gia san pham:</label>
            <input
              type="number"
              className="form-control"
              name="txtPrice"
              value={txtPrice}
              onChange={this.onChange}
            />
          </div>
          <div className="form-group">
            <label>Trang thai:</label>
          </div>
          <div className="checkbox">
            <label>
              <input
                type="checkbox"
                name="checkStatus"
                value={checkStatus}
                onChange={this.onChange}
                checked={checkStatus}
              />
              Con hang
            </label>
          </div>
          <Link className="btn btn-success m-2" to="/product-list">
            Tro lai
          </Link>
          <button type="submit" className="btn btn-primary">
            Luu lai
          </button>
        </form>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    itemEditting: state.itemEditting,
  };
};

const mapDispatchToprops = (dispatch, props) => {
  return {
    onAddProduct: (product) => {
      dispatch(actAddProductRequest(product));
    },
    onEditProduct: (id) => {
      dispatch(actGetProductRequest(id));
    },
    onUpdateProduct: (product) => {
      dispatch(actUpdatetProductRequest(product));
    },
  };
};

export default connect(mapStateToProps, mapDispatchToprops)(ProductActionPage);
