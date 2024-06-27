import React, { useEffect, useContext, useState, useRef } from "react";
import { MainContext } from "../context/Context";
import { Icon } from "@iconify/react";
import Slider from "../components/Slider";
import HappyCustomers from "../components/HappyCustomers";
import Download from "../components/Download";
import Questions from "../components/Questions";
import image5 from "../assets/image 5.png";
import image7 from "../assets/image 7.png";
import image9 from "../assets/image 9.png";
import pqbg from "../assets/pqbg.png";

const media = [
  {
    id: 1,
    date: "Jun 6, 2023, 15:20 IST",
    title:
      "ParkQwik Raised Pre-Seed Funding: Stepping Stone to South East Asian Expansion",
    description:
      "ParkQwik, an innovative parking solutions platform founded by Arun Kumar, is set to disrupt...",
    image: image5,
  },
  {
    id: 2,
    date: "Jun 7, 2023, 10:20 IST",
    title: "ParkQwik: Stepping Stone to South East Asian Expansion",
    description:
      "One of the standout features of this game-changing platform is its focus on supporting the EV..",
    image: image7,
  },
  {
    id: 3,
    date: "Jun 7, 2023, 10:20 IST",
    title: "ParkQwik: Stepping Stone to South East Asian Expansion",
    description:
      "One of the standout features of this game-changing platform is its focus on supporting the EV..",
    image: image9,
  },
];

const About = () => {
  const { setSelected } = useContext(MainContext);
  const [toggle, setToggle] = useState(false);
  const handleScroll = () => {
    window.scrollTo({
      top: 0,
      behavior: "instant",
    });
  };
  useEffect(() => {
    handleScroll();
  });

  const videoRef = useRef(null);

  const handlePlay = () => {
    setToggle(true);
    const video = videoRef.current;
    if (video) {
      video.play();
    }
  };

  useEffect(() => {
    setSelected(1);
  }, []);

  return (
    <div className="about-container">
      <div className="about-header">
        <p className="fs-1 fw-medium text-light text-center">
          ParkQwik is India’s No1 General & EV Parking Marketplace
        </p>
        <p className="text-light text-center" style={{ width: "90%" }}>
          We continuously strive to offer our customers the finest parking and
          car services solutions
        </p>
      </div>
      <div className="d-flex flex-column w-50 align-items-center text-center mt-5 pt-3">
        <p className="fs-1 fw-medium">About ParkQwik</p>
        <p className="sub-text text-center">
          Parkqwik connects numerous Renters across India and Singapore who{" "}
          <br /> are seeking parking spaces with Hosts who have available
          driveways,
          <br />
          garages, or parking spots to share.
        </p>
        <p className="sub-text text-center">
          Through our intuitive mobile app platform, we effortlessly facilitate
          connections <br /> between vehicle owners and parking lot operators,
          guaranteeing a smooth and <br /> hassle-free experience for everyone
          involved.
        </p>
      </div>
      <div className="w-75 d-flex flex-column align-items-center mt-5 pt-5">
        <p className="fs-1 fw-medium text-center">What Our Customer Say</p>
        <div className="about-video-container">
          <img className="parqwik-image mt-5 pt-3" src={pqbg} alt="no-img" />
          <iframe
            className="person-video"
            controls={toggle ? true : false}
            src="https://embed.wave.video/EdmJvQW4hQbZ2GPw"
            scrolling="no"
            title="review"
          ></iframe>
        </div>
      </div>
      <div className="w-100 d-flex flex-column align-items-center mt-5 pt-5">
        <p className="fs-1 fw-medium">Media Mentions</p>
        <div className="w-75">
          <Icon icon="el:quotes" color="#1a9e75" width={70} />
        </div>
        <Slider media={media} />
      </div>
      <HappyCustomers />
      <Download />
      <Questions />
    </div>
  );
};

export default About;
