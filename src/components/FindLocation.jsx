import React from "react";
import { Icon } from "@iconify/react";
import map from "../assets/map.png";

const FindLocation = () => {
  return (
    <div className="mt-5 w-100 d-flex flex-column flex-xl-row align-items-center justify-content-between gap-5">
      <div className="w-100 d-flex justify-content-center">
        <div className="d-flex flex-column align-items-">
          <p className="fs-1 fw-medium text-center text-sm-start w-100">
            Find and Reserve <br />
            Parking Anywhere
          </p>
          <p
            className="text-sm-start text-center p-2 p-sm-0"
            style={{ fontSize: "16px", color: "#606060", fontWeight: "500" }}
          >
            Easily find nearby parking spaces by entering <br /> your address or
            selecting your location
          </p>
          <div className="d-flex align-items-center position-relative justify-content-center">
            <div className="location-input-icon">
              <Icon icon="typcn:location" color="#1a9e75" width={28} />
            </div>
            <input
              className="location-input"
              type="text"
              placeholder="Enter your location"
            />
            <button className="button button2">
              <Icon icon="material-symbols:search" width={28} /> Search
            </button>
          </div>
        </div>
      </div>
      <img className="map-image" src={map} alt="" />
    </div>
  );
};

export default FindLocation;
