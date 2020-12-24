import React, { Component } from "react";
// import ProductItem from "../ProductItem/ProductItem";

class ProductList extends Component {
  render() {
    return (
      <div className="panel panel=primary">
        <div className="panel-heading">
          <h3>Danh sach san pham</h3>
        </div>
        <div className="panel-body">
          <table className="table table-bordered table-hover">
            <thead>
              <tr>
                <th>STT</th>
                <th>Ma</th>
                <th>Ten</th>
                <th>Gia</th>
                <th>Trang thai</th>
                <th>Hanh dong</th>
              </tr>
            </thead>
            <tbody>{this.props.children}</tbody>
          </table>
        </div>
      </div>
    );
  }
}

export default ProductList;
