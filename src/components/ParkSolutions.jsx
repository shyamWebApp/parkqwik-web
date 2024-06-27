import React from "react";
import nearby from "../assets/nearbycar.svg";
import valet from "../assets/valetcar.svg";
import ev from "../assets/evcar.svg";
import { useMediaQuery } from "react-responsive";

const ParkSolutions = () => {
  const isBigScreen = useMediaQuery({ query: "(min-width: 1300px)" });

  return (
    <div className="w-100 d-flex flex-column align-items-center mt-5">
      <p className="fs-1 fw-medium">Parking Solutions</p>
      <div className="parking-soln-container">
        <div className="position-relative">
          <div className="dotted-box"></div>
          <div className="header-box">
            <p>Nearby Parking</p>
          </div>
          <p className="sub-text text1 ps-4 mt-4 text-start">
            Discover nearby parking options with our hourly, weekly, <br />{" "}
            daily, and monthly plans. No matter where you're headed, <br /> our
            team is here to assist you in finding the perfect parking <br />{" "}
            spot near your location, whether it's at apartments, shops, <br />{" "}
            malls, events, and more.
          </p>
        </div>
        <img className="parking-soln-image" src={nearby} alt="no-img" />
        {isBigScreen ? (
          <>
            <img className="parking-soln-image" src={ev} alt="no-img" />
            <div className="position-relative">
              <div className="dotted-box ms-5"></div>
              <div className="header-box ms-5">
                <p>EV Parking</p>
              </div>
              <p className="sub-text text1 pe-0 pe-lg-4 mt-4 text-end">
                We provide dedicated spaces for EV parking where you <br /> can
                park, charge, and drive away, and repeat the <br />
                same until your subscription ends. We offer hourly, <br />{" "}
                daily,weekly, and monthly plans with enhanced security
              </p>
            </div>
          </>
        ) : (
          <>
            <div className="position-relative">
              <div className="dotted-box ms-5"></div>
              <div className="header-box ms-5">
                <p>EV Parking</p>
              </div>
              <p className="sub-text text1 pe-0 pe-lg-4 mt-4 text-end">
                We provide dedicated spaces for EV parking where you <br /> can
                park, charge, and drive away, and repeat the <br />
                same until your subscription ends. We offer hourly, <br />{" "}
                daily,weekly, and monthly plans with enhanced security
              </p>
            </div>
            <img className="parking-soln-image" src={ev} alt="no-img" />
          </>
        )}
        <div className="position-relative">
          <div className="dotted-box"></div>
          <div className="header-box">
            <p>Valet Parking</p>
          </div>
          <p className="sub-text text1 ps-4 mt-4 text-start ">
            Elevate your parking experience with our Valet service. <br />{" "}
            Whether you require parking for a brief visit or an extended <br />{" "}
            stay, reserve your spot in advance and savor a smooth, <br />{" "}
            contactless parking experience
          </p>
        </div>
        <img className="parking-soln-image" src={valet} alt="no-img" />
      </div>
    </div>
  );
};

export default ParkSolutions;
