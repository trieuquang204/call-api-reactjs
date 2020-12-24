import React, { Component } from "react";
import { Route, Link } from "react-router-dom";

const menus = [
  {
    name: "Trang chu",
    to: "/",
    exact: true,
  },
  {
    name: "Quan ly san pham",
    to: "/product-list",
    exact: false,
  },
];

const MenuLink = ({ label, to, activeOnlyWhenEact }) => {
  return (
    <Route
      path={to}
      exact={activeOnlyWhenEact}
      children={({ match }) => {
        var active = match ? "active" : "";
        return (
          <li className={`nav-item ${active}`}>
            <Link className="nav-link" to={to}>{label}</Link>
          </li>
        );
      }}
    />
  );
};
class Menu extends Component {
  showMenus = (menus) => {
    var result = null;
    if (menus.length > 0) {
      result = menus.map((menu, index) => {
        return (
          <MenuLink
            key={index}
            label={menu.name}
            to={menu.to}
            activeOnlyWhenEact={menu.exact}
          />
        );
      });
    }
    return result;
  };

  render() {
    return (
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <a className="navbar-brand" href="#">
          Call api
        </a>
        <div className="collapse navbar-collapse">
          <ul className="navbar-nav mr-auto">{this.showMenus(menus)}</ul>
        </div>
      </nav>
    );
  }
}

export default Menu;
