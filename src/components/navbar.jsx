import React, { Component } from "react";

class NavBar extends Component {
  render() {
    return (
      <nav className="navbar navbar-light bg-light">
        <a className="navbar-brand" href="#">
          Navbar {""}
          <span className="badge badge-pill badge-secondary">
            {this.props.total}
          </span>
        </a>
        <button onClick={this.props.onTotal} className="btn btn-primary">
          Total
        </button>
      </nav>
    );
  }
}

export default NavBar;
