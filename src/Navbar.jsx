import React, { Component } from "react";

class Navbar extends Component {
  render() {
    return (
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark px-3">
        {/* Brand */}
        <a className="navbar-brand fw-bold" href="#">
          ShopEase
        </a>

        {/* Toggle Button */}
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarContent"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        {/* Navbar Content */}
        <div className="collapse navbar-collapse" id="navbarContent">
          {/* Category Dropdown */}
          <ul className="navbar-nav me-3">
            <li className="nav-item dropdown">
              <a
                className="nav-link dropdown-toggle"
                href="#allcat"
                role="button"
                data-bs-toggle="dropdown"
              >
                All Categories
              </a>
              <ul className="dropdown-menu">
                <li>
                  <a className="dropdown-item" href="#phone">
                    Phones
                  </a>
                </li>
                <li>
                  <a className="dropdown-item" href="#shoe">
                    Shoes
                  </a>
                </li>
                <li>
                  <a className="dropdown-item" href="#watch">
                    Watches
                  </a>
                </li>
                <li>
                  <a className="dropdown-item" href="#cloth">
                    Clothes
                  </a>
                </li>
              </ul>
            </li>
          </ul>

          {/* Search Bar */}
          <form className="d-flex flex-grow-1 me-3">
            <input
              className="form-control rounded-0"
              type="search"
              placeholder="Search products..."
            />
            <button className="btn btn-warning rounded-0" type="submit">
              Search
            </button>
          </form>

          {/* Right Side */}
          <ul className="navbar-nav">
            <li className="nav-item">
              <a className="nav-link" href="#">
                Sign In
              </a>
            </li>

            <button
              className="btn btn-outline-light position-relative"
              onClick={this.props.onOpenOrders}
            >
              Card Items 🛒
              <span className="badge bg-danger ms-2">
                {this.props.cartCount}
              </span>
            </button>

            <li className="nav-item">
              <a className="nav-link fw-bold" href="#">
                🛒 Cart{" "}
                <span className="badge bg-warning text-dark">
                  {this.props.cartCount}
                </span>
              </a>
            </li>
          </ul>
        </div>
      </nav>
    );
  }
}

export default Navbar;
