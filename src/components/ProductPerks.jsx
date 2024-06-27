import React from "react";
import reserve from "../assets/reserve.svg";
import money from "../assets/money.svg";
import cctv from "../assets/cctv.svg";
import cargarage from "../assets/cargarage.svg";

const perks = [
  {
    id: "01",
    title: "Faster Booking",
    desc: "You can book parking space in just a few steps",
    image: reserve,
  },
  {
    id: "02",
    title: "Cheaper Price",
    desc: "We offer cost-effective parking subscription plans",
    image: money,
  },
  {
    id: "03",
    title: "Enchanced Security",
    desc: "Equipped with CCTV and array system",
    image: cctv,
  },
  {
    id: "04",
    title: "Covered Parking",
    desc: "Offers convenience and enhanced security",
    image: cargarage,
  },
];

const ProductPerks = () => {
  return (
    <div className="product-perk-container">
      <p className="fs-1 fw-medium">Our Product Perks</p>
      <div className="product-perk-grid">
        {perks.map((data) => (
          <div key={data.id} className="product-perk">
            <div className="product-perk-number">
              <p>{data.id}</p>
            </div>
            <img className="perk-image" src={data.image} alt="no-img" />
            <div className="text-start ms-1 ms-sm-3">
              <p className="text5">{data.title}</p>
              <p className="sub-text text2 w-75">{data.desc}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductPerks;
