/* eslint-disable no-unused-vars */
import React, { Component } from "react";
import { actAddProductRequest, actGetProductRequest } from "../../actions";
import apiCaller from "../../utils/apiCller";
import { connect } from "react-redux";

class ProductActionPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      id: "",
      txtName: "",
      txtPrice: "",
      chkbStatus: "",
    };
  }

  componentDidMount() {
    let { match } = this.props;
    if (match) {
      let id = match.params.id;
      this.props.onEditProduct(id);
    }
  }

  onChange = (e) => {
    let target = e.target;
    let name = target.name;
    let value = target.type === "checkbox" ? target.checked : target.value;
    this.setState({
      [name]: value,
    });
  };

  onSave = (e) => {
    e.preventDefault();
    let { id, txtName, txtPrice, chkbStatus } = this.state;
    let { history } = this.props;
    let product = {
      id: id,
      name: txtName,
      price: txtPrice,
      status: chkbStatus,
    };
    if (id) {
      apiCaller(`products/${id}`, "PUT", {
        name: txtName,
        price: txtPrice,
        status: chkbStatus,
      }).then((res) => {
        history.goBack();
      });
    } else {
      this.props.onAddProduct(product);
      history.goBack();
    }
  };

  render() {
    let { txtName, txtPrice, chkbStatus } = this.state;
    return (
      <div className="col-md-6">
        <form onSubmit={this.onSave}>
          <div className="form-group">
            <label>Ten san pham: </label>
            <input
              type="text"
              className="form-control"
              name="txtName"
              value={txtName}
              onChange={this.onChange}
            />
          </div>
          <div className="form-group">
            <label>Gia: </label>
            <input
              type="number"
              className="form-control"
              name="txtPrice"
              value={txtPrice}
              onChange={this.onChange}
            />
          </div>
          <div className="form-group">
            <label>Trang thai: </label>
          </div>
          <div className="checkbox">
            <label>
              <input
                type="checkbox"
                name="chkbStatus"
                value={chkbStatus}
                onChange={this.onChange}
                checked={chkbStatus}
              />
              Con hang
            </label>
          </div>
          <button type="submit" className="btn btn-primary">
            Luu lai
          </button>
        </form>
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch, props) => {
  return {
    onAddProduct: (product) => {
      dispatch(actAddProductRequest(product));
    },
    onEditProduct: (id) => {
      dispatch(actGetProductRequest(id));
    },
  };
};

export default connect(null, mapDispatchToProps)(ProductActionPage);
