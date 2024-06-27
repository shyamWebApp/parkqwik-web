import React, { useState, useEffect, useRef } from "react";
import { Icon } from "@iconify/react";

const star = [1, 2, 3, 4, 5];

const Slider = ({ slides, customers, media, services }) => {
  const [sliderBtn, setSliderBtn] = useState(false);
  const [amount, setAmount] = useState(0);

  const divRef = useRef();
  const [scrollWidth, setSrollWidth] = useState(0);
  const [custScrollWidth, setCustSrollWidth] = useState(0);

  useEffect(() => {
    const handleButton = () => {
      const innerWidth = window.innerWidth;
      setSliderBtn(innerWidth < 1300);

      if (innerWidth < 450) {
        setAmount(220);
        setCustSrollWidth(660);
      } else {
        setAmount(300);
        setCustSrollWidth(900);
      }
    };

    handleButton();

    window.addEventListener("resize", handleButton);
  }, []);

  const [scrollLeft, setScrollLeft] = useState(0);
  const [custScrollLeft, setCustScrollLeft] = useState(0);

  useEffect(() => {
    const handleResize = () => {
      if (divRef.current) {
        const width = divRef.current.getBoundingClientRect().width;
        if (width > 0 && width < 510) {
          setSrollWidth(1000);
        } else if (width > 510) {
          setSrollWidth(800);
        }
      }
    };
    window.addEventListener("resize", handleResize);
    handleResize();
  }, []);

  const handleScroll = (n) => {
    const container = document.getElementById("card-content-container");
    if (container) {
      const newScrollLeft = scrollLeft + n;
      if (newScrollLeft >= 0 && newScrollLeft <= scrollWidth) {
        container.scrollLeft = newScrollLeft;
        setScrollLeft(newScrollLeft);
      }
    }
  };

  const handleScrollCustomer = (n) => {
    const custContainer = document.getElementById("card-content-container2");
    if (custContainer) {
      const newScrollLeft = custScrollLeft + n;
      if (newScrollLeft >= 0 && newScrollLeft <= custScrollWidth) {
        custContainer.scrollLeft = newScrollLeft;
        setCustScrollLeft(newScrollLeft);
      }
    }
  };

  return (
    <div className="slider-container mt-3 mb-5">
      {sliderBtn && slides && (
        <button
          className="slider-button"
          style={
            scrollLeft === 0
              ? { opacity: 0, pointerEvents: "none" }
              : { opacity: 1 }
          }
          onClick={() => handleScroll(-200)}
        >
          {"<"}
        </button>
      )}
      {slides && (
        <div
          ref={divRef}
          className="card-content-container"
          id="card-content-container"
        >
          {slides.map((data) => (
            <div key={data.id} className="card-container">
              <img
                className="card-image-container"
                src={data.image}
                alt="nothing"
              />
              <p>{data.title}</p>
            </div>
          ))}
        </div>
      )}
      {sliderBtn && slides && (
        <button
          style={
            scrollLeft === 800
              ? { opacity: 0, pointerEvents: "none" }
              : { opacity: 1 }
          }
          className="slider-button"
          onClick={() => handleScroll(200)}
        >
          {">"}
        </button>
      )}
      {sliderBtn && services && (
        <button
          style={
            scrollLeft === 0
              ? { opacity: 0, pointerEvents: "none" }
              : { opacity: 1 }
          }
          className="slider-button"
          onClick={() => handleScroll(-200)}
        >
          {"<"}
        </button>
      )}
      {services && (
        <div
          ref={divRef}
          className="card-content-container"
          id="card-content-container"
        >
          {services.map((data) => (
            <div key={data.id} className="card-container mt-3">
              <img
                className="service-image-container"
                src={data.image}
                alt="nothing"
              />
              <p style={{ color: "#1a9e75", fontWeight: "500" }}>
                {data.title}
              </p>
            </div>
          ))}
        </div>
      )}
      {sliderBtn && services && (
        <button
          style={
            scrollLeft === 800
              ? { opacity: 0, pointerEvents: "none" }
              : { opacity: 1 }
          }
          className="slider-button"
          onClick={() => handleScroll(200)}
        >
          {">"}
        </button>
      )}
      {sliderBtn && customers && (
        <button
          style={
            custScrollLeft === 0
              ? { opacity: 0, pointerEvents: "none" }
              : { opacity: 1 }
          }
          className="slider-button"
          onClick={() => handleScrollCustomer(-amount)}
        >
          {"<"}
        </button>
      )}
      {customers && (
        <div
          ref={divRef}
          className="containerCus card-content-container"
          id="card-content-container2"
        >
          {customers.map((data) => (
            <div key={data.id} className="position-relative">
              <img className="customer-image" src={data.image} alt="no-img" />
              <div className="customer-card">
                <p className="customer-title">{data.title}</p>
                <p className="customer-desc">{data.description}</p>
                <div className="customer-name-container">
                  <div className="d-flex">
                    {star.map((index) => (
                      <Icon key={index} icon="ic:round-star" color="#ffdd2d" />
                    ))}
                  </div>
                  <p className="customer-name">{data.name}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
      {sliderBtn && customers && (
        <button
          className="slider-button"
          onClick={() => handleScrollCustomer(amount)}
          style={
            custScrollLeft === 660
              ? { opacity: 0, pointerEvents: "none" }
              : { opacity: 1 }
          }
        >
          {">"}
        </button>
      )}
      {media && (
        <div className="card-content-container">
          {media.map((data) => (
            <div key={data.id} className="media-card-container">
              <div className="w-100 d-flex justify-content-end">
                <img className="media-image" src={data.image} alt="no-img" />
              </div>
              <p className="media-title">{data.title}</p>
              <p className="media-desc">
                {data.description}
                <span className="read-more"> Read More</span>
              </p>
              <div className="w-100 d-flex justify-content-end">
                <p className="media-date">{data.date}</p>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Slider;
