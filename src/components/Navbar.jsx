import React, { useState, useEffect, useContext } from "react";
import "../components/Components.css";
import { Icon } from "@iconify/react";
import { motion, AnimatePresence } from "framer-motion";
import { Link } from "react-router-dom";
import { MainContext } from "../context/Context";
import parqwik from "../assets/parkqwiktext.png";
import logo from "../assets/logo.png";
// import chatbot from "../assets/chatbot.svg";
import download from "../assets/download.svg";
import Parkqwik from "../assets/Parkqwik.apk"
const navVAriants = {
  open: {
    x: 0,
    opacity: 1,
    transition: {
      duration: 0.3,
    },
  },
  close: {
    x: "120vw",
    opacity: 0,
  },
  exit: {
    x: "120vw",
    opacity: 0,
    transition: {
    duration: 0.3,
    },
  },
  shadow: {
    boxShadow: "0px 15px 10px -15px #111",
  },
  noShadow: {
    boxShadow: 0,
  },
};

const logoVariants = {
  open: {
    rotate: 0,
    transition: {
      duration: 0.5,
      type: "spring",
      stiffness: 300,
    },
  },
  close: {
    rotate: 180,
  },
};
const logoTextVariants = {
  open: {
    x: 0,
    opacity: 1,
    transition: {
      duration: 0.5,
      type: "spring",
      stiffness: 300,
    },
  },
  close: {
    x: "-30px",
    opacity: 0,
  },
};

const Navbar = () => {
  const [nav, setNav] = useState(false);
  const [navList, setNavList] = useState(false);
  const [navShadow, setNavShadow] = useState(false);

  const { selected, setSelected } = useContext(MainContext);

  useEffect(() => {
    const handleWidth = () => {
      setNav(window.innerWidth < 1300);
      window.innerWidth > 1000 && setNavList(false);
    };

    const handleNav = () => {
      window.scrollY > 10 ? setNavShadow(true) : setNavShadow(false);
    };

    handleWidth();

    window.addEventListener("resize", handleWidth);
    window.addEventListener("scroll", handleNav);

    return () => {
      window.removeEventListener("resize", handleWidth);
    };
  }, []);

  return (
    <motion.div
      variants={navVAriants}
      animate={navShadow ? "shadow" : "noShadow"}
      className="navbar-container"
    >
      <Link to="/" style={{ textDecoration: "none", color: "#464646" }}>
        <div className="d-flex align-items-center gap-1">
          <motion.img
            variants={logoVariants}
            animate="open"
            initial="close"
            className="logo-image"
            src={logo}
            alt="no"
          />
          <motion.div
            variants={logoTextVariants}
            animate="open"
            initial="close"
            className="d-flex flex-column align-items-center "
          >
            <img src={parqwik} style={{ width: "150px" }} alt=" " />
          </motion.div>
        </div>
      </Link>
      <div className="d-flex align-items-center gap-5">
        {nav ? (
          <Icon
            icon="mingcute:menu-fill"
            width={30}
            onClick={() => setNavList(true)}
          />
        ) : (
          <>
            <Link
              to="/"
              className="text-decoration-none"
              style={{ color: "#464646" }}
            >
              <p
                className={selected === 0 ? "nav-items-selected" : "nav-items"}
                onClick={() => setSelected(0)}
              >
                Home
              </p>
            </Link>
            <Link
              to="about"
              className="text-decoration-none"
              style={{ color: "#464646" }}
            >
              <p
                className={selected === 1 ? "nav-items-selected" : "nav-items"}
                onClick={() => setSelected(1)}
              >
                About Us
              </p>
            </Link>
            <Link
              className="text-decoration-none "
              style={{ color: "#464646" }}
              to="parking"
            >
              <p
                className={selected == 2 ? "nav-items-selected" : "nav-items"}
                onClick={() => setSelected(2)}
              >
                Parking
              </p>
            </Link>
            <Link
              className="text-decoration-none"
              style={{ color: "#464646" }}
              to="fastag"
            >
              <p
                className={selected == 3 ? "nav-items-selected" : "nav-items"}
                onClick={() => setSelected(3)}
              >
                Fastag
              </p>
            </Link>
            <Link
              to="product"
              className="text-decoration-none "
              style={{ color: "#464646" }}
            >
              <p
                className={selected == 4 ? "nav-items-selected" : "nav-items"}
                onClick={() => setSelected(4)}
              >
                Products{" "}
              </p>
            </Link>
            <Link
              to="careers"
              className="text-decoration-none "
              style={{ color: "#464646" }}
            >
              <p
                className={selected == 5 ? "nav-items-selected" : "nav-items"}
                onClick={() => setSelected(5)}
              >
                Careers
              </p>
            </Link>
            <Link
              to="contact"
              className="text-decoration-none "
              style={{ color: "#464646" }}
            >
              <p
                className={selected == 6 ? "nav-items-selected" : "nav-items"}
                onClick={() => setSelected(6)}
              >
                Contact Us
              </p>
            </Link>
            <a href={Parkqwik} target="_black" style={{textDecoration:'none'}}>
            <button className="button button1">
              <img
                style={{ marginRight: 5, width: 22, height: 21.37 }}
                src={download}
              />
              Quick Download
            </button></a>
          </>
        )}
      </div>
      <AnimatePresence>
        {navList && (
          <motion.div
            className="sidenav-container"
            variants={navVAriants}
            animate="open"
            initial="close"
            exit="exit"
          >
            <p className="ms-2 w-75">
              <Icon
                icon="mingcute:close-fill"
                width={26}
                onClick={() => setNavList(!navList)}
              />
            </p>
            <Link
              to="/"
              className="text-decoration-none"
              style={{ color: "#464646" }}
              onClick={() => setNavList(!navList)}
            >
              <p
                className={selected == 0 ? "nav-items-selected" : "nav-items"}
                onClick={() => setSelected(0)}
              >
                Home
              </p>
            </Link>
            <Link
              to="about"
              className="text-decoration-none"
              style={{ color: "#464646" }}
              onClick={() => setNavList(!navList)}
            >
              <p
                className={selected == 1 ? "nav-items-selected" : "nav-items"}
                onClick={() => setSelected(1)}
              >
                About Us
              </p>
            </Link>
            <Link
              className="text-decoration-none "
              style={{ color: "#464646" }}
              to="parking"
              onClick={() => setNavList(!navList)}
            >
              <p
                className={selected == 2 ? "nav-items-selected" : "nav-items"}
                onClick={() => setSelected(2)}
              >
                Parking
              </p>
            </Link>
            <Link
              to="fastag"
              className="text-decoration-none"
              style={{ color: "#464646" }}
              onClick={() => setNavList(!navList)}
            >
              <p
                className={selected == 3 ? "nav-items-selected" : "nav-items"}
                onClick={() => setSelected(3)}
              >
                Fastag
              </p>
            </Link>
            <Link
              to="product"
              className="text-decoration-none "
              style={{ color: "#464646" }}
              onClick={() => setNavList(!navList)}
            >
              <p
                className={selected == 4 ? "nav-items-selected" : "nav-items"}
                onClick={() => setSelected(4)}
              >
                Products{" "}
              </p>
            </Link>
            <Link
              className="text-decoration-none "
              style={{ color: "#464646" }}
              onClick={() => setNavList(!navList)}
              to={"careers"}
            >
              <p
                className={selected == 5 ? "nav-items-selected" : "nav-items"}
                onClick={() => setSelected(5)}
              >
                Careers
              </p>
            </Link>
            <Link
              to="product"
              className="text-decoration-none "
              style={{ color: "#464646" }}
              onClick={() => setNavList(!navList)}
            >
              <p
                className={selected == 6 ? "nav-items-selected" : "nav-items"}
                onClick={() => setSelected(6)}
              >
                Contact Us
              </p>
            </Link>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
};

export default Navbar;
