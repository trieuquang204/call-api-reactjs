import React, { Component } from "react";
import { Link } from "react-router-dom";

class ProductItem extends Component {
  onDelete = (id) => {
    if (window.confirm("Ban chac chan muon xoa?")) {
      this.props.onDelete(id);
    }
  };

  render() {
    let { product, index } = this.props;
    let statusName = product.status ? "Con hang" : "Het hang";
    let statusClass = product.status ? "warning" : "success";
    return (
      <tr>
        <td>{index + 1}</td>
        <td>{product.id}</td>
        <td>{product.name}</td>
        <td>{product.price}</td>
        <td>
          <span className={`label label-${statusClass}`}>{statusName}</span>
        </td>
        <td>
          <Link to={`/product/${product.id}/edit`} className="btn btn-success">
            Sua
          </Link>
          <button
            className="btn btn-danger"
            onClick={() => this.onDelete(product.id)}
          >
            Xoa
          </button>
        </td>
      </tr>
    );
  }
}

export default ProductItem;
