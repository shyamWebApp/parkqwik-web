import React, { useEffect } from "react";
import Products from "../components/Products";
import Rescue from "../assets/rescue.svg";
import fastag from "../assets/fastag2.svg";
import Form from "../components/Form";
import Download from "../components/Download";
import Questions from "../components/Questions";
import { useMediaQuery } from "react-responsive";

const Product = () => {
  const isSmallScreen = useMediaQuery({ query: "(min-width: 700px)" });
  const handleScroll = () => {
    window.scrollTo({
      top: 0,
      behavior: "instant",
    });
  };
  useEffect(() => {
    handleScroll();
  });

  return (
    <div className="about-container">
      <div className="product-header">
        <p className="fs-1 fw-medium text-light text-center">
          Your All-in-One Vehicle Companion
        </p>
        <p className="text-light text-center" style={{ width: "90%" }}>
          Discover seamless services, from Parking, FASTag recharge, roadside
          assistance to {isSmallScreen && <br />}
          vehicle insurance and simplify all bill payments in one convenient
          app. {isSmallScreen && <br />}
          Empower your journey with ParkQwik, where every service you need is
          just a tap away!
        </p>
      </div>
      <Products />
      <div className=" d-flex flex-xl-row flex-column align-items-center  justify-content-evenly mt-5 mb-4 bg-image">
        <div className="gap-0">
          <img className="fastagimg-container" src={fastag} alt="phone-img" />
        </div>
        <div className="d-flex flex-column justify-content-center mb-5 align-items-center align-items-sm-start">
          <p className="fs-1 fw-medium text-center text-xxl-start">
            Quick and Efficient Fastag
            {isSmallScreen && <br />} Solutions
          </p>
          <p className="sub-text text-center text-xl-start">
            Unlocking hassle-free payments at tolls, parking spots,
            {isSmallScreen && <br />}
            and fuel stations. With seamless integration, enjoy swift{" "}
            {isSmallScreen && <br />}
            transactions that enhance your journey. Elevate your
            {isSmallScreen && <br />}
            travel experience with our all-in-one Fastag solution.
          </p>
        </div>
      </div>

      <div className="container d-flex flex-xl-row flex-column align-items-center w-100 justify-content-evenly mt-5 mb-4">
        <div className="d-flex flex-column justify-content-center mb-5">
          <p className="fs-1 fw-medium text-center text-sm-start">
            24/7 Roadside Rescue
          </p>
          <p className="sub-text">
            24/7 roadside assistance is just a call or app away. From{" "}
            {isSmallScreen && <br />}
            fuel drains to flat tires, our dedicated team responds swiftly,
            {isSmallScreen && <br />}
            reaching your location in less than 90 minutes. Drive with{" "}
            {isSmallScreen && <br />}
            confidence, knowing we're always by your side!
          </p>
        </div>
        <div className="gap-0">
          <img className="fastagimg-container" src={Rescue} alt="phone-img" />
        </div>
      </div>

      <Form />
      <Download />
      <Questions />
    </div>
  );
};

export default Product;
