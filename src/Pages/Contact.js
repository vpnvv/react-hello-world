import React, { useContext } from "react";
import "../Components/Card.css";
import image from "../Components/img-01.png";
import emailjs from "@emailjs/browser";
import swal from "sweetalert";
// import {MyContext} from '../App';



function Contact() {
  
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_fyjn3uu",
        "gmail_form",
        e.target,
        "user_2KxZzGUtnmLCV4lp8M1hz"
      )
      .then(
        (result) => {
          console.log(result);
          swal("Good job!", "your message submitted successfully!", "success");
        },
        (error) => {
          console.log(error.text);
        }
      );
    e.target.reset();
  };

  return (
    <div>
      <div class="contact1">
        <div class="container-contact1">
          <div class="contact1-pic js-tilt" data-tilt>
            <img src={image} alt="IMG" />
          </div>

          <form onSubmit={sendEmail} class="contact1-form validate-form">
            <span class="contact1-form-title">Get in touch</span>

            <div
              class="wrap-input1 validate-input"
              data-validate="Name is required"
            >
              <input
                class="input1"
                type="text"
                name="name"
                placeholder="Name"
                required
              />
              <span class="shadow-input1"></span>
            </div>

            <div
              class="wrap-input1 validate-input"
              data-validate="Valid email is required: ex@abc.xyz"
            >
              <input
                class="input1"
                type="text"
                name="email"
                placeholder="Email"
                required
              />
              <span class="shadow-input1"></span>
            </div>

            <div
              class="wrap-input1 validate-input"
              data-validate="Subject is required"
            >
              <input
                class="input1"
                type="text"
                name="subject"
                placeholder="Subject"
                required
              />
              <span class="shadow-input1"></span>
            </div>

            <div
              class="wrap-input1 validate-input"
              data-validate="Message is required"
            >
              <textarea
                class="input1"
                name="message"
                placeholder="Message"
              ></textarea>
              <span class="shadow-input1"></span>
            </div>

            <div class="container-contact1-form-btn">
              <button type="submit" class="contact1-form-btn">
                <span>
                  Send Email
                  <i class="fa fa-long-arrow-right" aria-hidden="true"></i>
                </span>
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Contact;
