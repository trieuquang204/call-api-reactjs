import React, { Component } from "react";
import { Link } from "react-router-dom";
class ProductItem extends Component {
  onDelete = (id) => {
    if (confirm("ban co muon xoa khong?")) { //eslint-disable-line
      this.props.onDelete(id);
    }
  };

  render() {
    var { product, index } = this.props;
    var statusName = product.status ? "Con hang" : "het hang";
    var statusClass = product.status ? "warning" : "success";
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
