import React, { useEffect, useRef, useState } from "react";
import Button from "react-bootstrap/Button";
import emailjs from "@emailjs/browser";
import { Icon } from "@iconify/react";

const Form = () => {
  const [details, setDetails] = useState({ name: "", mail: "", content: "" });
  const [submitted, setSubmitted] = useState(false);
  const [disabled, setDisabled] = useState(true);
  const [alert, setAlert] = useState("");
  const [mailAlert, setMailAlert] = useState(false);
  const [text, setText] = useState("Submit");
  const form = useRef();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setDetails({ ...details, [name]: value });
    if (name === "mail") {
      if (validateEmail(value)) setMailAlert(false);
      else setMailAlert(true);
    }
  };

  const sendMail = (e) => {
    e.preventDefault();
    setText("Loading..");

    emailjs
      .send(
        "service_7x0niit",
        "template_sn24g9a",
        {
          to_name: details.name,
          from_name: "Parkqwik",
          message:
            "We have recieved your enquiry for Parkqwik account deletion. Our team will contact you soon.",
          reply_to: details.mail,
        },
        "BsJg9z4tBNCwKIf3h"
      )
      .then(
        (result) => {
          setSubmitted(true);
          setText("Done");
          setDisabled(true);
          setAlert({
            data: "Your query has been sumbitted. Our team will contact back soon.",
            color: "#198754",
          });
        },
        (error) => {
          setDisabled(true);
          setAlert({
            data: "Error sending query. Please try some time later.",
            color: "red",
          });
        }
      );
  };

  function validateEmail(email) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  }

  console.log(details);

  useEffect(() => {
    if (Object.values(details).every((value) => value) && !mailAlert) {
      setDisabled(false);
    } else setDisabled(true);
  }, [details]);

  return (
    <div className=" d-flex flex-column justify-content-center align-items-center form-container">
      <p className="form-title text-center text-md-start">
        To Delete User Account & Data
      </p>
      <p className="form-sub">
        To delete your account and data, please fill out this form, and your
        request will be processed.
      </p>

      <div className="input-group mb-3">
        <input
          onChange={(e) => handleChange(e)}
          type="text"
          className="form-control"
          placeholder="Enter Your Name*"
          aria-label="Recipient's username"
          aria-describedby="basic-addon2"
          name="name"
        />
      </div>
      <div className="input-group mb-3">
        <input
          onChange={(e) => handleChange(e)}
          name="mail"
          type="text"
          className="form-control"
          placeholder="Enter Your Email Address*"
          aria-label="Recipient's username"
          aria-describedby="basic-addon2"
        />
      </div>
      {mailAlert && (
        <p
          style={{
            alignSelf: "flex-start",
            position: "relative",
            left: "13%",
            top: -8,
            color: "red",
          }}
        >
          Invalid mail format.
        </p>
      )}

      <div className="input-group">
        <textarea
          onChange={(e) => handleChange(e)}
          name="content"
          placeholder="Write reason for deleting data*"
          className="form-control"
          aria-label="With textarea"
          rows={8}
        ></textarea>
      </div>
      <Button
        disabled={disabled}
        className="btn1"
        variant="success"
        onClick={(e) => sendMail(e)}
      >
        {text} {submitted && <Icon icon="mdi:tick" />}
      </Button>
      {alert && (
        <p style={{ color: alert.color, marginTop: 15 }}>{alert.data}</p>
      )}
    </div>
  );
};

export default Form;
