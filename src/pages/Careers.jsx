import React, { useEffect } from "react";
import mail from "../assets/mail.svg";
import indeed from "../assets/indeed.svg";
import Download from "../components/Download";
import Questions from "../components/Questions";
import { useMediaQuery } from "react-responsive";

const Careers = () => {
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
      <div className="career-header">
        <p className="fs-1 fw-medium text-dark text-center mb-0">
          Careers at ParkQwik
        </p>
        <p className="text-center city-name ">CHENNAI | BANGALORE | MUMBAI | DELHI</p>
        <p
          className="text-dark text-center mt-3 mt-md-5"
          style={{ width: "90%" }}
        >
          We're on the lookout for skilled and dynamic individuals to join our
          team. If you're passionate about
          {isSmallScreen && <br />}
          innovation and ready to contribute to our success. Be part of a
          thriving workplace where your talents
          {isSmallScreen && <br />}
          are valued and growth is encouraged
        </p>
        <p className="text-dark text-center mt-2 mt-md-5">
          Send your resumes to <img src={mail} alt="" />
          <span style={{ color: "#1a9e75", fontWeight: 600 }}>
            {" "}
            hr@parkqwik.com
          </span>
        </p>
        <p className="text-dark text-center mt-2 mt-md-2">
          Visit our Indeed Page To Apply Current Openings <a href="https://in.indeed.com/jobs?q=parkqwik&l=&from=searchOnHP&vjk=9a257139a6eef4ba" style={{textDecoration:"none"}}><img src={indeed} alt=" "/>
          <span style={{color:"#1a9e75",fontWeight:600}}>
           {" "}
           parkqwik
          </span>
          </a>
        </p>
      </div>
      <Download />
      <Questions />
    </div>
  );
};

export default Careers;
