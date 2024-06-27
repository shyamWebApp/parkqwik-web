import React from "react";
import Button from "react-bootstrap/Button";
const Form = () => {
  return (
    <div className=" d-flex flex-column justify-content-center align-items-center form-container">
      <p className="form-title text-center text-md-start">
        To Know More About Our Product
      </p>
      <p className="form-sub">
        Feel free to reach out with your questions or requests. We're here to
        assist you!
      </p>
      <div className="input-group mb-3">
        <input
          type="text"
          className="form-control"
          placeholder="Enter Your Name"
          aria-label="Recipient's username"
          aria-describedby="basic-addon2"
        />
      </div>
      <div className="input-group mb-3">
        <input
          type="text"
          className="form-control"
          placeholder="Enter Your Email Address/ Mobile Number"
          aria-label="Recipient's username"
          aria-describedby="basic-addon2"
        />
      </div>
      <div className="input-group">
        <textarea
          placeholder="Write something about your inquiry "
          className="form-control"
          aria-label="With textarea"
          rows={8}
        ></textarea>
      </div>

      <Button className="btn1" variant="success">
        Submit
      </Button>
    </div>
  );
};

export default Form;
