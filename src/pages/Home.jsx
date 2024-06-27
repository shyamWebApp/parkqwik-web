import React, { useContext, useEffect, useRef } from "react";
import Products from "../components/Products";
import HowItWorks from "../components/HowItWorks";
import HappyCustomers from "../components/HappyCustomers";
import Download from "../components/Download";
import Questions from "../components/Questions";
import { MainContext } from "../context/Context";
import parkImage from "../assets/parkimage.png";
const Home = () => {
  const scrollContainerRef = useRef(null);
  const handleScroll = () => {
    window.scrollTo({
      top: 0,
      behavior: "instant",
    });
  };
  useEffect(() => {
    handleScroll();
  });
  const { setSelected, selected } = useContext(MainContext);
  useEffect(() => {
    setSelected(0);
  }, [selected]);
  return (
    <div ref={scrollContainerRef} className="home-container">
      <div className="home-content">
        <div className="d-flex flex-column justify-content-center">
          <p className="header-text">
            Simplify Your Car <br />
            Experience with ParkQwik
          </p>
          <p style={{ color: "#606060 " }}>
            The complete Parking App and Car Services Solution{" "}
          </p>
        </div>
        <div className="home-image-container">
          <img className="w-100" src={parkImage} alt="park-img" />
        </div>
      </div>
      <Products />
      <HowItWorks />
      <HappyCustomers />
      <Download />
      <Questions />
    </div>
  );
};

export default Home;
