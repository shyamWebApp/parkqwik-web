import React from "react";
import FindLocation from "./FindLocation";
import location from "../assets/location2.png";
import arrow from "../assets/arrow.png";
import notify from "../assets/notify.png";
import space from "../assets/parkspace.png";

const HowItWorks = () => {
  return (
    <div className="w-100 mt-4 d-flex flex-column align-items-center">
      <p className="fs-1 fw-medium">How it works</p>
      <div className="w-75 d-flex flex-column flex-lg-row align-items-center justify-content-around mt-4 gap-4">
        <div className="d-flex flex-column align-items-center gap-4">
          <img style={{ width: "50px" }} src={location} alt="location" />
          <p style={{ fontSize: "13px", textAlign: "center" }}>
            You’ll receive directions to the space <br /> and information on how
            to access
          </p>
        </div>
        <img className="arrow" src={arrow} alt="arrow" />
        <div className="d-flex flex-column align-items-center gap-4">
          <img style={{ width: "50px" }} src={notify} alt="notify" />
          <p style={{ fontSize: "13px", textAlign: "center" }}>
            The space owner/car park is notified
            <br /> of your booking
          </p>
        </div>
        <img className="arrow" src={arrow} alt="arrow" />
        <div className="d-flex flex-column align-items-center gap-4">
          <img style={{ width: "50px" }} src={space} alt="parkspace" />
          <p style={{ fontSize: "13px", textAlign: "center" }}>
            Just turn up, park your vehicle and <br /> get on with your day!
          </p>
        </div>
      </div>
      <FindLocation />
    </div>
  );
};

export default HowItWorks;
