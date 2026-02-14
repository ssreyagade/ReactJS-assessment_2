import React, { Component } from "react";
import "./App.css";

class ProductCard extends Component {
  handleAddToCart = () => {
    // Send product to App
    this.props.onAddToCart(this.props.product);

    // Show alert
    alert(`${this.props.product.productName} added to cart 🛒`);
  };

  handleBuyNow = () => {
    this.props.onBuyNow(this.props.product);
  };

  render() {
    const { productImage, productName, category, brand, price } =
      this.props.product;

    return (
      <div className="card image-wrapper product-card h-100 shadow-sm">
        <img
          src={productImage}
          className="card-img-top"
          alt={productName}
          style={{ height: "200px", objectFit: "cover" }}
        />

        <div className="card-body text-center d-flex flex-column">
          <h5 className="card-title">{productName}</h5>

          <p className="card-text mb-1">
            <strong>Brand:</strong> {brand}
          </p>

          <p className="card-text mb-1">
            <strong>Category:</strong> {category}
          </p>

          <p className="price mb-3">₹ {price}</p>

          <div className="mt-auto">
            <button
              className="btn add-btn w-100 mb-2"
              onClick={this.handleAddToCart}
            >
              Add to Cart
            </button>

            <button className="btn buy-btn w-100" onClick={this.handleBuyNow}>
              Buy Now
            </button>
          </div>
        </div>
      </div>
    );
  }
}

export default ProductCard;
