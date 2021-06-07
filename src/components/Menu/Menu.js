import React, { Component } from "react";

class Menu extends Component {
  render() {
    return (
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <a className="navbar-brand" href="#">
          Call api
        </a>
        <div className="collapse navbar-collapse">
          <ul className="navbar-nav mr-auto">
            <li className="nav-item active">
              <a className="nav-link" href="#">
                Trang chu
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">
                Quan ly san pham
              </a>
            </li>
          </ul>
        </div>
      </nav>
    );
  }
}
//

export default Menu;
