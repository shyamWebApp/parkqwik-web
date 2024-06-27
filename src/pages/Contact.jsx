import React, { useEffect } from "react";
import mail from "../assets/mail.svg";
import Call from "../assets/call.svg";
import Download from "../components/Download";
import Questions from "../components/Questions";
const Contact = () => {
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
      <div className="contact-header">
        <p className="fs-1 fw-medium text-dark text-center mb-0">Get In Touch</p>
        <p className="text-center city-name ">CHENNAI | BANGALORE | MUMBAI | DELHI</p>
        <p className="text-dark text-center mt-5" style={{ width: "90%" }}>
          Need to get in touch with us ?
        </p>
        <p className="text-dark text-center mt-1">
          <img src={mail} alt="" />
          <span style={{ color: "#1a9e75", fontWeight: 600 }}>
            {" "}
            hr@parkqwik.com{" "}
          </span>
          <span style={{ color: "#1a9e75" }}>| </span>
          <img src={Call} alt="" />
          <span style={{ color: "#1a9e75", fontWeight: 600 }}>
            +91 842 842 88 33
          </span>
        </p>
      </div>
      <Download />
      <Questions />
    </div>
  );
};

export default Contact;
