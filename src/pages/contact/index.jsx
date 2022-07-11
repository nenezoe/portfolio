import React from "react";
import { Form, Row, Button } from "react-bootstrap";
import HomeIcon from "@mui/icons-material/Home";
import CallIcon from "@mui/icons-material/Call";
import MailOutlineIcon from "@mui/icons-material/MailOutline";
import EventAvailableIcon from "@mui/icons-material/EventAvailable";
import emailjs from 'emailjs-com';
import SendIcon from "@mui/icons-material/Send";
import { useRef } from 'react';



const Contact = () => {
  const form = useRef();

  const sendEmailHandler = (event) => {
    event.preventDefault();
    // service_j6hmg8x

    emailjs.sendForm('service_j6hmg8x', 'template_091jz8k', form.current, 'qBUPJGow2yrCw-dyn')
    .then((result) => {
        console.log(result.text);
    }, (error) => {
        console.log(error.text);
    });
};


  return (
    <section id="contact" className="py-5">
      <p className="text-center text-red mt-5">Contact</p>
      <h2 className="mb-5 text-center">Contact with Me</h2>

      <div className="row">
        <div className="col-12 col-md-4 mt-4">
          <ul className="contact-card-wrapper">
            <li className="contact-card p-3 align-items-center">
              <HomeIcon />

              <p className="mt-3">
                <address>Lagos, Lagos State Nigeria</address>{" "}
              </p>
            </li>
            <li className="contact-card p-3 align-items-center">
              <CallIcon />

              <p className="mt-3">
                <a href="tel: +2348137199123"> +2348137199123</a>,{"  "}{" "}
                {/* <a href="tel:+2348118474456"> +2348118474456</a> */}
              </p>
            </li>

            <li className="contact-card p-3 align-items-center">
              <MailOutlineIcon />

              <p className="mt-3">
                <a href="okerekenene7@gmail.com">okerekenene7@gmail.com</a>{" "}
              </p>
            </li>
            <li className="contact-card p-3 align-items-center">
              <EventAvailableIcon />

              <p className="mt-3">Freelance Availiable</p>
            </li>
          </ul>
        </div>

        <div className="col-12 col-md-8 mt-4">
          <Form ref={form} onSubmit={sendEmailHandler}>
            <Row className="mb-4">
              <div className="col-6">
                <Form.Control type="name" placeholder="Enter Your Name" name="to_name" />
              </div>

              <div className="col-6">
                <Form.Control
                  type="telephone"
                  placeholder="Enter Your Phonenumber"
                  name="phone_number"
                />
              </div>
            </Row>
            <Row className="mb-4">
              <div className="col-6">
                <Form.Control type="email" placeholder="Enter email" name="from_name" />
              </div>

              <div className="col-6">
                <Form.Control type="name" placeholder="Enter Your Address" name="address" />
              </div>
            </Row>

            <Form.Group
              className="mb-4"
              controlId="exampleForm.ControlTextarea1"
            >
              <Form.Control
                as="textarea"
                rows={5}
                placeholder="enter your message"
                name="message"
              />
            </Form.Group>

            {/* <Button variant="primary" type="submit">
    Submit
  </Button> */}
            <button className="d-flex justify-content-center mt-4 works-button" onClick={sendEmailHandler}>
              {/* <a href="https://github.com/nenezoe" className="works-button"> */}
                <span>Send a message</span> <SendIcon />
              {/* </a> */}
            </button>
          </Form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
