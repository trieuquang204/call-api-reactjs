import React, { Component } from "react";
import apiCaller from "../../utils/apiCller";

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
    let { txtName, txtPrice, chkbStatus } = this.state;
    apiCaller("products", "POST", {
      name: txtName,
      price: txtPrice,
      status: chkbStatus,
    }).then((res) => {
      console.log("res", res);
    });
    console.log("1", txtName);
    console.log("2", txtPrice);
    console.log("3", chkbStatus);
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

export default ProductActionPage;
