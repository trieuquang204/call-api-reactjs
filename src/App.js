import React, { Component } from "react";
import Menu from "./components/Menu/Menu";
import ProductList from "./components/ProductList/ProductList";
class App extends Component {
  render() {
    return (
      <>
        <Menu />
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <button className="btn btn-info mt-3 mb-3">Them san pham</button>
              <ProductList />
            </div>
          </div>
        </div>
      </>
    );
  }
}

export default App;
