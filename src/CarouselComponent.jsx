import React, { Component } from "react";
import banner1 from "./assets/banner1.jpg";
import banner2 from "./assets/banner2.jpg";
import banner3 from "./assets/banner3.jpg";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";

class CarouselComponent extends Component {
  render() {
    return (
      <div
        id="mainCarousel"
        className="carousel slide"
        data-bs-ride="carousel"
        data-bs-interval="3000"
      >
        <div className="carousel-inner">
          <div className="carousel-item active">
            <img src={banner2} className="d-block w-100" alt="Banner 1" />
          </div>

          <div className="carousel-item">
            <img src={banner1} className="d-block w-100" alt="Banner 2" />
          </div>

          <div className="carousel-item">
            <img src={banner3} className="d-block w-100" alt="Banner 3" />
          </div>
        </div>

        <button
          className="carousel-control-prev"
          type="button"
          data-bs-target="#mainCarousel"
          data-bs-slide="prev"
        >
          <span className="carousel-control-prev-icon"></span>
        </button>

        <button
          className="carousel-control-next"
          type="button"
          data-bs-target="#mainCarousel"
          data-bs-slide="next"
        >
          <span className="carousel-control-next-icon"></span>
        </button>
      </div>
    );
  }
}

export default CarouselComponent;
