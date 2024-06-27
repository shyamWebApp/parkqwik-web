import React from "react";
import { Icon } from "@iconify/react";
import iphone1 from "../assets/iPhone-1.png";
import iphone2 from "../assets/iPhone-2.png";
import download from "../assets/download.svg";
import Parkqwik from "../assets/Parkqwik.apk"
const Download = () => {
  return (
    <div className="d-flex flex-xl-row flex-column align-items-sm-center gap-5 w-100 justify-content-evenly mt-5">
      <div className="d-flex flex-column align-items-center align-items-md-start download">
        <p className="fs-2 fw-medium" style={{ marginLeft: "-2px" }}>
          Download ParkQwik
        </p>
        <p className="sub-text text1">
          By downloading ParkQwik, you gain access to a world of seamless
          parking experiences and car services right at your fingertips.
        </p>
        <a href={Parkqwik} target="_black" style={{textDecoration:'none'}}>
        <button href className="button quickbtn">
              <img
                style={{ marginRight: 5, width: 24, height: 24 }}
                src={download}
              />
              Quick Download
            </button></a>
        <div className="d-flex justify-content-start gap-3 mt-xl-0 mt-sm-3 pt-3 mb-5">
          <a href="https://play.google.com/store/apps/details?id=com.parkqwik.app" target="_black" style={{textDecoration:'none'}}><button className="button button3">
            <Icon icon="logos:google-play-icon" width={26} />{" "}
            <p
              style={{ fontSize: "9px", textAlign: "start", marginTop: "16px" }}
            >
              Get it on <br />
              <span style={{ fontSize: "13px", fontWeight: "500" }}>
                Google Play
              </span>
            </p>
          </button></a>
          <button className="button button3">
            <Icon icon="ant-design:apple-filled" width={32} />{" "}
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                marginTop: "3px",
              }}
            >
              <p
                style={{
                  fontSize: "9px",
                  textAlign: "start",
                  marginBottom: 0,
                }}
              >
                Download on the
              </p>
              <p
                style={{ fontSize: "13px", fontWeight: "500", marginBottom: 0 }}
              >
                Apple Store
              </p>
            </div>
          </button>
        </div>
      </div>
      <div className="d-flex justify-content-center">
        <img className="mobile-container mobile1" src={iphone2} alt="noimg" />
        <img
          className="mobile-container mobile2"
          style={{ position: "relative", left: "-45px", bottom: "30px" }}
          src={iphone1}
          alt="noimg"
        />
      </div>
    </div>
  );
};

export default Download;
