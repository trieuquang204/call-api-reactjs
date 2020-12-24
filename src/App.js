import React, { Component } from "react";
import { Route, Switch, BrowserRouter as Router } from "react-router-dom";
import Menu from "./components/Menu/Menu";
// import ProductList from "./components/ProductList/ProductList";

import routes from "./routes";
class App extends Component {
  showContentMenus = () => {
    var result = null;
    if (routes.length > 0) {
      result = routes.map((route, index) => {
        return (
          <Route
            key={index}
            path={route.path}
            exact={route.exact}
            component={route.main}
          />
        );
      });
    }
    return <Switch>{result}</Switch>;
  };

  render() {
    return (
      <Router>
        <Menu />
        <div className="container">
          <div className="row">
            {this.showContentMenus(routes)}
          </div>
        </div>
      </Router>
    );
  }
}

export default App;
