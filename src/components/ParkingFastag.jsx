import React from "react";
import nearby from "../assets/nearbycar.svg";
import recharge from "../assets/recharge.svg";
import activate from "../assets/activate.svg";
import buy from "../assets/buy.svg";
import { useMediaQuery } from "react-responsive";

const ParkSolutions = () => {
  const isBigScreen = useMediaQuery({ query: "(min-width: 1300px)" });
  const isSmallScreen = useMediaQuery({ query: "(min-width: 700px)" });

  return (
    <div className="w-100 d-flex flex-column align-items-center mt-5">
      <p className="fs-1 fw-medium text-center text-sm-start">
        How to Use Parkqwik FASTag ?
      </p>
      <div className="parking-soln-container">
        <div className="position-relative">
          <div className="dotted-box"></div>
          <div className="header-box">
            <p>Buy FASTag</p>
          </div>
          <p className="sub-text text1 ps-4 mt-4 text-start">
            Simply download the ParkQwik app, navigate to the "Buy FASTag"
            {isSmallScreen && <br />} option on the home page, provide your
            vehicle details and {isSmallScreen && <br />}location, and complete
            the payment process. Your FASTag {isSmallScreen && <br />}
            will be on its way to your designated location.
          </p>
        </div>
        <img className="parking-soln-image" src={buy} alt="no-img" />
        {isBigScreen ? (
          <>
            <img className="parking-soln-image" src={activate} alt="no-img" />
            <div className="position-relative">
              <div className="dotted-box ms-5"></div>
              <div className="header-box ms-5">
                <p>Activate FASTag</p>
              </div>
              <p className="sub-text text1 pe-0 pe-lg-4 mt-4 text-end">
                The FASTag activation process is incredibly simple!
                {isSmallScreen && <br />} Just scan the FASTag's barcode, enter
                your vehicle {isSmallScreen && <br />}
                information, and upload your RC Document.
                {isSmallScreen && <br />}
                Your FASTag is verified successfully and good to go!
              </p>
            </div>
          </>
        ) : (
          <>
            <div className="position-relative">
              <div className="dotted-box "></div>
              <div className="header-box">
                <p>Activate FASTag</p>
              </div>
              <p className="sub-text text1 ps-4  mt-4 text-start">
                The FASTag activation process is incredibly simple!
                {isSmallScreen && <br />}Just scan the FASTag's barcode,enter your vehicle {isSmallScreen && <br />}
                information, and upload your RC document 
                {isSmallScreen && <br />} Your FASTag is verified successfully and good to go
              </p>
            </div>
            <img className="parking-soln-image" src={activate} alt="no-img" />
          </>
        )}
        <div className="position-relative">
          <div className="dotted-box"></div>
          <div className="header-box">
            <p>Recharge FASTag</p>
          </div>
          <p className="sub-text text1 ps-4 mt-4 text-start ">
            Choose your FASTag bank, enter the amount you wish
            {isSmallScreen && <br />} recharge your FASTag with, and complete the payment {isSmallScreen && <br />}
            Now, you can affix it to your car's windshield for hassle-free{isSmallScreen && <br />}{" "}
            toll payments!
          </p>
        </div>
        <img className="parking-soln-image" src={recharge} alt="no-img" />
      </div>
    </div>
  );
};

export default ParkSolutions;
