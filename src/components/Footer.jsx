import React, { useState } from "react";
import { Icon } from "@iconify/react";
import footerlogo from "../assets/footerlogo.png";
import parqwik from "../assets/parkqwikfooter.png";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const variants = {
  open: {
    maxHeight: 0,
    opacity: 0,
    overflow: "hidden",
  },
  close: {
    maxHeight: 420,
    opacity: 1,
  },
};

const arrow = {
  open: {
    rotate: 180,
    y: 3,
  },
  close: {
    rotate: 0,
  },
};

const Footer = () => {
  const [isOpen, setIsOpen] = useState([]);

  const handleClick = (n) => {
    if (isOpen.includes(n)) {
      const newArr = isOpen.filter((item) => item !== n);
      setIsOpen(newArr);
    } else {
      const newArr = [...isOpen, n];
      setIsOpen(newArr);
    }
  };

  console.log(isOpen);

  return (
    <div className="footer-container">
      <div className="footer-content-container">
        <div className="d-flex flex-column align-items-start ">
          <div className="d-flex align-items-center ">
            <img width={80} src={footerlogo} alt="logo" />
            <img src={parqwik} style={{ width: 150 }} />
          </div>
          <p
            style={{
              fontSize: "16px",
              fontWeight: "300",
              width: "80%",
              marginTop: "10px",
            }}
          >
            The Complete Parking App and Car Services Solution
          </p>
          <p style={{ fontSize: "18px", fontWeight: "600" }}>Follow Us</p>
          <div className="d-flex align-items-center gap-4">
            <a href="https://www.facebook.com/parkqwik" target="_blank">
              <Icon icon="ri:facebook-fill" width={28} color="white" />
            </a>
            <a target="_blank" href="https://twitter.com/Parkqwik_India">
              <Icon icon="bi:twitter" width={28} color="white" />
            </a>
            <a
              target="_blank"
              href="https://www.instagram.com/parkqwik_parkingmadeeasy/"
            >
              <Icon icon="fa-brands:instagram" width={28} color="white" />
            </a>
            <a
              target="_blank"
              href="https://www.linkedin.com/company/92730296/admin/feed/posts/"
            >
              <Icon icon="basil:linkedin-solid" width={30} color="white" />
            </a>
          </div>
        </div>
        <div className="d-flex flex-column align-items-start ">
          <p className="fs-5 fw-bold">Quick Links</p>
          <div style={{ lineHeight: "12px", fontSize: "15px" }}>
          <Link to="about"><p onClick={()=>window.scrollTo({top:0,behavior:'smooth'})}>About Us</p></Link>
            <p>Blogs</p>
            <p>Newsletters</p>
            <p>Help & Support</p>
            <Link to="careers"><p onClick={()=>window.scrollTo({top:0,behavior:'smooth'})}>Careers</p></Link>
          
            <Link to="termsandcondition"><p onClick={()=>window.scrollTo({top:0,behavior:'smooth'})}>Terms & Conditions</p></Link>
            <Link to="privacypolicy"><p onClick={()=>window.scrollTo({top:0,behavior:'smooth'})}>Privacy Policy</p></Link>
            <Link to="refundpolicy"><p onClick={()=>window.scrollTo({top:0,behavior:'smooth'})}>Refund & Cancellation Policy </p></Link>
            <Link to="datadeletion"><p onClick={()=>window.scrollTo({top:0,behavior:'smooth'})}>Data Deletion</p></Link>

            
          </div>
        </div>
        <div className="d-flex flex-column align-items-start ">
          <p className="fs-5 fw-bold">Products</p>
          <div style={{ lineHeight: "12px", fontSize: "15px" }}>
            <p>Fastag Services</p>
            <p>Nearby Parking</p>
            <p>EV Parking</p>
            <p>Doorstep Car Wash</p>
            <p>Road Assistance</p>
            <p>Car Insurance</p>
            <p>Shop</p>
          </div>
        </div>
        <div className="d-flex flex-column align-items-start">
          <p className="fs-5 fw-bold">Reach Us</p>
          <div style={{ lineHeight: "12px", fontSize: "15px" }}>
            <div className="d-flex gap-2 align-items-center">
              <Icon icon="ic:baseline-mail" width={22} />
              <p style={{ marginTop: "15px", marginLeft: "5px" }}>
                info@parkqwik.com
              </p>
            </div>
            <div className="d-flex gap-2 align-items-center">
              <Icon icon="ic:round-phone" width={26} />
              <p style={{ marginTop: "15px" }}>+91 842 842 88 33 </p>
            </div>
            <div className="d-flex gap-2 mt-2">
              <Icon icon="fluent:location-28-filled" width={26} />

              <p style={{ lineHeight: "18px" }}>
                Level 7, IIFL Towers, 143, MGR Main <br /> Road, Perungudi,
                Chennai - 96.
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="d-flex flex-column align-items-center justify-content-md-center w-100">
        <p className="fs-5 fw-bold">Our Office Address</p>
        <div className="d-flex flex-column flex-lg-row align-items-center align-items-md-start justify-content-md-center gap-1 gap-lg-4 mt-2">
          <div>
            <div onClick={() => handleClick(1)} className="address-header">
              <p
                style={{ color: "#1A9E75", height: 9 }}
                className="fw-semibold"
              >
                Chennai Office
              </p>
              <motion.div
                variants={arrow}
                animate={isOpen.includes(1) ? "open" : "close"}
              >
                <Icon icon="icon-park-solid:down-one" color="#1A9E75" />
              </motion.div>
            </div>
            <motion.div
              variants={variants}
              animate={isOpen.includes(1) ? "close" : "open"}
              initial={"open"}
              className="address-container"
            >
              <Icon
                style={{ marginTop: "2px" }}
                icon="mdi:location"
                color="#1a9e75"
                width={22}
              />
              <p className="green-border" style={{ color: "#1A9E75",fontSize:16 }}>
                IIFL TOWERS, Level 7, 143, MGR Main Road, Kandhanchavadi,
                Chennai, Tamil Nadu - 600 096.
              </p>
              <Icon
                style={{ marginTop: "2px" }}
                icon="mdi:location"
                color="#1a9e75"
                width={22}
              />
              <p className="green-border" style={{ color: "#1A9E75",fontSize:16 }}>
                Rayala Towers, Mount Road, Anna Salai, Chennai, Tamil Nadu- 600
                002.
              </p>
              <Icon
                style={{ marginTop: "2px" }}
                icon="mdi:location"
                color="#1a9e75"
                width={22}
              />

              <p style={{ color: "#1A9E75", marginBottom: 0,fontSize:16 }}>
                Adityaram Nagar, 129, Sea Horse Inn, 8th cross, 12th street,
                Chennai, Tamil Nadu 600 119.
              </p>
            </motion.div>
          </div>
          <div>
            <div className="address-header" onClick={() => handleClick(2)}>
              <p
                style={{ color: "#1A9E75", height: 9 }}
                className="fw-semibold"
              >
                Bangalore Office
              </p>
              <motion.div
                variants={arrow}
                animate={isOpen.includes(2) ? "open" : "close"}
              >
                <Icon icon="icon-park-solid:down-one" color="#1A9E75" />
              </motion.div>
            </div>
            <motion.div
              variants={variants}
              animate={isOpen.includes(2) ? "close" : "open"}
              initial={"open"}
              className="address-container"
            >
              <Icon
                style={{ marginTop: "2px" }}
                icon="mdi:location"
                color="#1a9e75"
                width={22}
              />
              <p className="green-border" style={{ color: "#1A9E75",fontSize:16 }}>
                1537, 5th Main Road, Rajiv Gandhi Nagar, 7th Sector, HSR Layout,
                Bengaluru, Karnataka 560 102.
              </p>
              <Icon
                style={{ marginTop: "2px" }}
                icon="mdi:location"
                color="#1a9e75"
                width={22}
              />
              <p style={{ color: "#1A9E75", marginBottom: 0,fontSize:16 }}>
                150, 1, Infantry Road, Opp. Commissioner office, Vasanth Nagar,
                Bengaluru, Karnataka 560 001.
              </p>
            </motion.div>
          </div>
          <div>
            <div className="address-header" onClick={() => handleClick(3)}>
              <p
                style={{ color: "#1A9E75", height: 9 }}
                className="fw-semibold"
              >
                Mumbai Office
              </p>
              <motion.div
                variants={arrow}
                animate={isOpen.includes(3) ? "open" : "close"}
              >
                <Icon icon="icon-park-solid:down-one" color="#1A9E75" />
              </motion.div>
            </div>
            <motion.div
              variants={variants}
              initial={"open"}
              animate={isOpen.includes(3) ? "close" : "open"}
              className="address-container"
            >
              <Icon
                style={{ marginTop: "2px" }}
                icon="mdi:location"
                color="#1a9e75"
                width={22}
              />
              <p style={{ color: "#1A9E75", marginBottom: 0,fontSize:16 }}>
              AK Estate, Off Veer 
              Savarkar Flyover, Besides Radisson Blu Hotel, Swami Vivekananda Road, Goregaon West, Mumbai, Maharashtra 400062
              </p>
            </motion.div>
          </div>
          <div>
            <div className="address-header" onClick={() => handleClick(4)}>
              <p
                style={{ color: "#1A9E75", height: 9 }}
                className="fw-semibold"
              >
                Delhi Office
              </p>
              <motion.div
                variants={arrow}
                animate={isOpen.includes(4) ? "open" : "close"}
              >
                <Icon icon="icon-park-solid:down-one" color="#1A9E75" />
              </motion.div>
            </div>
            <motion.div
              variants={variants}
              initial={"open"}
              animate={isOpen.includes(4) ? "close" : "open"}
              className="address-container"
            >
              <Icon
                style={{ marginTop: "2px" }}
                icon="mdi:location"
                color="#1a9e75"
                width={22}
              />
              <p style={{ color: "#1A9E75", marginBottom: 0,fontSize:16 }}>
                Delhi Office 401, D-1 Building No 46/47, Fourth Floor, Guru
                Angad Nagar, Laxmi Nagar, Delhi - 110 092.
              </p>
            </motion.div>
          </div>
        </div>
      </div>
      <p style={{textAlign:'center'}}>&copy; 2024 Parkqwik Private Limited. All rights reserved</p>
    </div>
  );
};

export default Footer;
