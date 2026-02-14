import React, { Component } from "react";

class PaymentModal extends Component {
  state = {
    name: "",
    address: "",
    paymentMethod: "Card",
  };

  handleChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value,
    });
  };

  handleSubmit = (e) => {
    e.preventDefault();

    alert(
      `Order placed successfully 🎉\n\nName: ${this.state.name}\nPayment: ${this.state.paymentMethod}`,
    );

    this.props.onClose();
  };

  render() {
    const { product, onClose } = this.props;

    if (!product) return null;

    return (
      <>
        <div className="modal show fade d-block" tabIndex="-1">
          <div className="modal-dialog">
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title">Buy {product.productName}</h5>
                <button
                  type="button"
                  className="btn-close"
                  onClick={onClose}
                ></button>
              </div>

              <form onSubmit={this.handleSubmit}>
                <div className="modal-body">
                  <p>
                    <strong>Price:</strong> ₹ {product.price}
                  </p>

                  <div className="mb-3">
                    <label className="form-label">Full Name</label>
                    <input
                      type="text"
                      name="name"
                      className="form-control"
                      required
                      onChange={this.handleChange}
                    />
                  </div>

                  <div className="mb-3">
                    <label className="form-label">Address</label>
                    <textarea
                      name="address"
                      className="form-control"
                      required
                      onChange={this.handleChange}
                    ></textarea>
                  </div>

                  <div className="mb-3">
                    <label className="form-label">Payment Method</label>
                    <select
                      name="paymentMethod"
                      className="form-select"
                      onChange={this.handleChange}
                    >
                      <option value="Card">Credit/Debit Card</option>
                      <option value="UPI">UPI</option>
                      <option value="COD">Cash on Delivery</option>
                    </select>
                  </div>
                </div>

                <div className="modal-footer">
                  <button
                    type="button"
                    className="btn btn-secondary"
                    onClick={onClose}
                  >
                    Cancel
                  </button>
                  <button type="submit" className="btn btn-success">
                    Proceed to Pay
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>

        <div className="modal-backdrop fade show"></div>
      </>
    );
  }
}

export default PaymentModal;
