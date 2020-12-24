import React, { Component } from "react";

class ProductItem extends Component {
  render() {
    return (
      <tr>
        <td>1</td>
        <td>1</td>
        <td>iphone</td>
        <td>500</td>
        <td>
          <span className="label label-warning">Con hang</span>
        </td>
        <td>
          <button className="btn btn-success">Sua</button>
          <button className="btn btn-danger">Xoa</button>
        </td>
      </tr>
    );
  }
}

export default ProductItem;
