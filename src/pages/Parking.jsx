import React, { useEffect, useContext, useState } from "react";
import { Icon } from "@iconify/react";
import { MainContext } from "../context/Context";
import Slider from "../components/Slider";
import ParkSolutions from "../components/ParkSolutions";
import ProductPerks from "../components/ProductPerks";
import HappyCustomers from "../components/HappyCustomers";
import Download from "../components/Download";
import Questions from "../components/Questions";
import office from "../assets/office.svg";
import restaurant from "../assets/restaurant.svg";
import residential from "../assets/residential.svg";
import malls from "../assets/malls.svg";
import supermarket from "../assets/supermarket.svg";
import yellowcars from "../assets/yellowcars.svg";

const slides = [
  { id: 1, image: office, title: "Workspace" },
  { id: 2, image: malls, title: "Shopping Malls" },
  {
    id: 3,
    image: restaurant,
    title: "Restaurants",
  },
  {
    id: 4,
    image: residential,
    title: "Residential Areas",
  },
  { id: 5, image: supermarket, title: "Shops" },
];

const Parking = () => {
  const { setSelected } = useContext(MainContext);
  const handleScroll = () => {
    window.scrollTo({
      top: 0,
      behavior: "instant",
    });
  };
  useEffect(() => {
    handleScroll();
  });

  const [br, setBr] = useState(true);

  useEffect(() => {
    setSelected(2);
    const handleWidth = () => {
      window.innerWidth < 590 ? setBr(false) : setBr(true);
    };
    window.addEventListener("resize", handleWidth);
    handleWidth();
  }, [setSelected]);

  return (
    <div className="parking-container">
      <div className="w-100 d-flex flex-column flex-xl-row align-items-center justify-content-lg-evenly align-items-xl-center gap-4">
        <div className="d-flex flex-column align-items-xl-start align-items-center">
          <p className="fs-1 fw-medium text-center text-lg-start">
            Revolutionize Your{" "}
            <span style={{ color: "#1A9E75" }}>
              Parking {br && <br />} Journey{" "}
            </span>{" "}
            with Our Expertise
          </p>
          <p className="sub-text text1">
            Our team will assist you throughout the reservation {br && <br />}
            process
          </p>
          <button className="button button5">
            <Icon icon="ic:round-phone" width={22} />
            +91 842 842 88 33
          </button>
        </div>
        <img className="yellow-cars" src={yellowcars} alt="no-img" />
      </div>
      <div className="w-100 d-flex flex-column align-items-center mt-5">
        <p className="fs-1 fw-medium text-center" style={{ width: "90%" }}>
          We Offer Parking Services At
        </p>
        <Slider services={slides} />
      </div>
      <ParkSolutions />
      <ProductPerks />
      <HappyCustomers />
      <Download />
      <Questions />
    </div>
  );
};

export default Parking;
