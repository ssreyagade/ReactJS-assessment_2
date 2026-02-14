import React, { Component } from "react";
import ProductCard from "./ProductCard";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";

import AOS from "aos";
import "aos/dist/aos.css";

import { allproducts, phones, shoes, watches, clothes } from "./productList.js";
import Navbar from "./Navbar";
import CarouselComponent from "./CarouselComponent";
import PaymentModal from "./PaymentModal";

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      selectedCategory: "All",
      products: allproducts,
      cart: [],
      showModal: false,
      buyProduct: null,
    };
  }

  // ✅ INIT AOS
  componentDidMount() {
    AOS.init({
      duration: 1000,
      once: true,
      easing: "ease-in-out",
    });
  }

  // CATEGORY CHANGE
  handleCategoryChange = (category) => {
    let selectedProducts = [];

    if (category === "All") selectedProducts = allproducts;
    else if (category === "Phones") selectedProducts = phones;
    else if (category === "Shoes") selectedProducts = shoes;
    else if (category === "Watches") selectedProducts = watches;
    else if (category === "Clothes") selectedProducts = clothes;

    this.setState(
      {
        selectedCategory: category,
        products: selectedProducts,
      },
      () => {
        AOS.refresh(); // 🔥 refresh animation after category change
      },
    );
  };

  // ADD TO CART
  handleAddToCart = (product) => {
    this.setState((prevState) => ({
      cart: [...prevState.cart, product],
    }));
  };

  // OPEN ORDERS MODAL
  handleOpenModal = () => {
    this.setState({ showModal: true });
  };

  // CLOSE ORDERS MODAL
  handleCloseModal = () => {
    this.setState({ showModal: false });
  };

  // OPEN BUY NOW MODAL
  handleBuyNow = (product) => {
    this.setState({ buyProduct: product });
  };

  // CLOSE BUY NOW MODAL
  handleCloseBuyModal = () => {
    this.setState({ buyProduct: null });
  };

  render() {
    const categories = ["All", "Phones", "Shoes", "Watches", "Clothes"];

    const categoryStyles = {
      All: { bg: "#f8f9fa", text: "#000", bar: "#000" },
      Phones: { bg: "#e7f1ff", text: "#0d6efd", bar: "#0d6efd" },
      Shoes: { bg: "#e9f7ef", text: "#198754", bar: "#198754" },
      Watches: { bg: "#fdecea", text: "#dc3545", bar: "#dc3545" },
      Clothes: { bg: "#f3e8ff", text: "#6f42c1", bar: "#6f42c1" },
    };

    const currentStyle = categoryStyles[this.state.selectedCategory];

    return (
      <>
        {/* 🔥 NAVBAR */}
        <div data-aos="fade-down">
          <Navbar
            cartCount={this.state.cart.length}
            onOpenOrders={this.handleOpenModal}
          />
        </div>

        {/* 🔥 CAROUSEL */}
        <div data-aos="zoom-in">
          <CarouselComponent />
        </div>

        {/* PRODUCTS SECTION */}
        <div
          className="container-fluid py-5"
          style={{
            backgroundColor: currentStyle.bg,
            transition: "0.4s ease",
          }}
        >
          <div id="allcat" className="container">
            {/* 🔥 SECTION TITLE */}
            <h1
              className="text-center mb-3"
              style={{ color: currentStyle.text }}
              data-aos="fade-right"
            >
              {this.state.selectedCategory} Collection
            </h1>

            <div
              data-aos="fade-left"
              style={{
                height: "4px",
                width: "80px",
                backgroundColor: currentStyle.bar,
                margin: "0 auto 30px auto",
                borderRadius: "10px",
              }}
            ></div>

            {/* 🔥 CATEGORY BUTTONS */}
            <div className="text-center mb-4" data-aos="fade-up">
              {categories.map((category) => (
                <button
                  key={category}
                  className="btn m-2 px-4"
                  style={{
                    backgroundColor:
                      this.state.selectedCategory === category
                        ? currentStyle.text
                        : "#ffffff",
                    color:
                      this.state.selectedCategory === category
                        ? "#ffffff"
                        : "#000",
                    border: `2px solid ${currentStyle.text}`,
                  }}
                  onClick={() => this.handleCategoryChange(category)}
                >
                  {category}
                </button>
              ))}
            </div>

            {/* 🔥 PRODUCTS GRID */}
            <div id="phone" className="row">
              {this.state.products.length > 0 ? (
                this.state.products.map((product, index) => (
                  <div
                    className="col-lg-3 col-md-4 col-sm-6 mb-4"
                    key={product.id}
                    data-aos="fade-up"
                    data-aos-delay={index * 100} // stagger effect
                  >
                    <ProductCard
                      product={product}
                      onAddToCart={this.handleAddToCart}
                      onBuyNow={this.handleBuyNow}
                    />
                  </div>
                ))
              ) : (
                <h4 className="text-center text-danger">No Products Found</h4>
              )}
            </div>
          </div>
        </div>

        {/* ORDERS MODAL */}
        {this.state.showModal && (
          <>
            <div className="modal show fade d-block" tabIndex="-1">
              <div className="modal-dialog modal-lg">
                <div className="modal-content">
                  <div className="modal-header">
                    <div>
                      <h5 className="modal-title">Your Cart</h5>
                      <h6 className="modal-title">
                        To add items to cart click on Add Cart
                      </h6>
                    </div>

                    <button
                      type="button"
                      className="btn-close"
                      onClick={this.handleCloseModal}
                    ></button>
                  </div>

                  <div className="modal-body">
                    {this.state.cart.length === 0 ? (
                      <p>No items in cart 🛒</p>
                    ) : (
                      <ul className="list-group">
                        {this.state.cart.map((item, index) => (
                          <li
                            key={index}
                            className="list-group-item d-flex justify-content-between"
                          >
                            <span>{item.productName}</span>
                            <span>₹ {item.price}</span>
                          </li>
                        ))}
                      </ul>
                    )}
                  </div>

                  <div className="modal-footer">
                    <button
                      className="btn btn-secondary"
                      onClick={this.handleCloseModal}
                    >
                      Close
                    </button>
                  </div>
                </div>
              </div>
            </div>

            <div
              className="modal-backdrop fade show"
              onClick={this.handleCloseModal}
            ></div>
          </>
        )}

        {/* BUY NOW MODAL */}
        {this.state.buyProduct && (
          <PaymentModal
            product={this.state.buyProduct}
            onClose={this.handleCloseBuyModal}
          />
        )}
      </>
    );
  }
}

export default App;
