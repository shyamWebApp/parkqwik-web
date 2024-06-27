import React from "react";
import Slider from "./Slider";
import fasTag from "../assets/fasttag.png";
import location from "../assets/location.png";
import ev from "../assets/ev.png";
import insure from "../assets/insurance.png";
import road from "../assets/road.png";
import toll from "../assets/toll.png";
import iphone1 from "../assets/iphone-front.png";
import iphone2 from "../assets/iphone-side.png";

const slides = [
  {
    id: 1,
    image: fasTag,
    title: "Fastag Services",
  },
  {
    id: 2,
    image: location,
    title: "Nearby Parking",
  },
  { id: 3, image: ev, title: "EV Parking" },
  {
    id: 4,
    image: insure,
    title: "Car Insurance",
  },
  { id: 5, image: road, title: "Road Assistance" },
  { id: 6, image: toll, title: "Toll Estimator" },
];

const Products = () => {
  return (
    <div className="w-100 d-flex flex-column align-items-center justify-content-center mt-5">
      <p className="fs-1 fw-medium">Our Services</p>
      <Slider slides={slides} />
      <div className="container d-flex flex-xl-row flex-column align-items-center w-100 justify-content-evenly mt-5 mb-4">
        <div className="d-flex flex-column justify-content-center mb-5">
          <p className="fs-1 fw-medium text-center text-lg-start">
            Parking is easy with us
          </p>
          <p className="sub-text">
            ParkQwik helps you to find, reserve, and pay for parking <br />{" "}
            spaces in a few taps. Say goodbye to endless searching <br /> and
            wasted time.
          </p>
        </div>
        <div className="gap-0">
          <img className="mobile-container" src={iphone1} alt="phone-img" />
          <img
            className="mobile-container"
            style={{ position: "relative", left: "-12px", bottom: "15px" }}
            src={iphone2}
            alt="phone-img"
          />
        </div>
      </div>
    </div>
  );
};

export default Products;
