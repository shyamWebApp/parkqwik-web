import React from "react";
import Slider from "./Slider";
import happy2 from "../assets/h2.png";
import happy3 from "../assets/h3.png";
import happy4 from "../assets/happy4.png";
import happy1 from "../assets/h1.png";

const customers = [
  {
    id: 1,
    name: "Charle",
    title: "My car looks absolutely shiny every morning.",
    description:
      "I tried ParkQwik car wash service on the recommendation of a friend, and there has been no looking back since then.",
    image: happy2,
  },
  {
    id: 2,
    name: "Kumar",
    title: "ParkQwik is the best parking app I've used so far.",
    description:
      "I can quickly check for open spots and secure one with ease. The convenience is unmatched.",
    image: happy3,
  },
  {
    id: 3,
    name: "Jessica",
    title: "Had a great experience with ParkQwik.",
    description:
      "ParkQwik has been a lifesaver in urban areas with limited parking options. I no longer waste time driving around aimlessly.",
    image: happy4,
  },
  {
    id: 4,
    name: "Liya",
    title: "Using ParkQwik has been a game-changer for me.",
    description:
      "I can reserve a spot in advance and have peace of mind knowing it's waiting for me. Highly recommended!",
    image: happy1,
  },
];

const HappyCustomers = () => {
  return (
    <div className="w-100 d-flex flex-column align-items-center mt-5">
      <p
        className="fs-1 fw-medium"
        style={{ width: "90%", textAlign: "center" }}
      >
        Our Happy Customers
      </p>
      <Slider customers={customers} />
    </div>
  );
};

export default HappyCustomers;
