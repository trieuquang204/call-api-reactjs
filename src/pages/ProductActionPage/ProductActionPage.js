import React, { Component } from "react";

class ProductActionPage extends Component {
  render() {
    return (
      <div className="col-md-6">
        <form>
          <div className="form-group">
            <label>Ten san pham: </label>
            <input type="text" className="form-control" />
          </div>
          <div className="form-group">
            <label>Gia: </label>
            <input type="number" className="form-control" />
          </div>
          <div className="form-group">
            <label>Trang thai: </label>
          </div>
          <div className="checkbox">
            <label>
              <input type="checkbox" />
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
