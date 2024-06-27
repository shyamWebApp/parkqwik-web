import React, { useEffect } from "react";
import ParkFastag from "../components/ParkingFastag";
import FastagPerks from "../components/FastagPerks";
import Download from "../components/Download";
import Questions from "../components/Questions";
import { useMediaQuery } from "react-responsive";

const Fastag = () => {
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
      <div className="fastag-header">
        <p className="fs-1 fw-medium text-light text-center">
          A Smarter Way to Pay Tolls
        </p>
        <p className="text-light text-center" style={{ width: "90%" }}>
          Our multifunctional RFID tag streamlines your car's windshield by
          serving various purposes.{isSmallScreen && <br />}
          It facilitates smooth, interruption-free passage at NHAI Toll plazas,
          HPCL petrol pumps,{isSmallScreen && <br />} society and corporate
          gates, as well as numerous parking facilities nationwide.
        </p>
      </div>
      <ParkFastag />
      <FastagPerks />
      <Download />
      <Questions />
    </div>
  );
};

export default Fastag;
