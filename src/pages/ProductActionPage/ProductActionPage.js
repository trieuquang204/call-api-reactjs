import React, { Component } from "react";
import { Link } from "react-router-dom";
import callApi from "../../utils/apiCaller";

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
      callApi(`products/${id}`, "GET", null).then((res) => {
        var data = res.data;
        this.setState({
          id: data.id,
          txtName: data.name,
          txtPrice: data.price,
          checkStatus: data.status,
        });
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
    if (id) {
      callApi(`products/${id}`, "PUT", {
        name: txtName,
        price: txtPrice,
        status: checkStatus,
      }).then((res) => {
        history.goBack();
      });
    } else {
      callApi("products", "POST", {
        name: txtName,
        price: txtPrice,
        status: checkStatus,
      }).then((res) => {
        history.goBack();
      });
    }
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

export default ProductActionPage;
