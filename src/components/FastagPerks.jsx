import React from "react";
import quick from "../assets/quick.svg";
import fuel from "../assets/fuel.svg";
import cashless from "../assets/cashless.svg";
import cashback from "../assets/cashback.svg";

const perks = [
  {
    id: "01",
    title: "Quick Recharge",
    desc: "Get Swift and secure FASTag recharge with our seamless app.",
    image:quick,
  },
  {
    id: "02",
    title: "Fuel Payments",
    desc: "You can pay at the fuel stations with FASTag.",
    image:fuel,
  },
  {
    id: "03",
    title: "Cashless Parking",
    desc: "You can pay with FASTag at the parking.",
    image:cashless,
  },
  {
    id: "04",
    title: "Exciting Cashbacks",
    desc: "The more you use FASTag, the more cashback you receive",
    image: cashback,
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
