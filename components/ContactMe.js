import React, { useContext, useRef, useState } from "react";
import styles from "../styles/ContactMe.module.css";
import Image from "next/image";
import contactme from "../public/assets/images/contactme.png";
import Heading from "./atoms/Heading";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faComments,
  faEnvelope,
  faUser,
} from "@fortawesome/free-solid-svg-icons";
import generalContext from "@/context/generalContext";

const ContactMe = () => {
  const loader = useRef();
  const refSubmit = useRef();
  const context = useContext(generalContext);
  const { showAlert } = context;

  const [contactmedetails, setContactmeDetails] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (loader.current) loader.current.style.display = "inline-block";
    if (refSubmit.current) refSubmit.current.style.display = "none";

    const { name, email, message } = contactmedetails;

    const response = await fetch("/api/contactme", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ name, email, message }),
    });
    const data = await response.json();

    if (data.issuccess) {
      showAlert(data.msg, "success");
    } else {
      showAlert(data.msg, "error");
    }
    if (loader.current) loader.current.style.display = "none";
    if (refSubmit.current) refSubmit.current.style.display = "";

    setContactmeDetails({
      name: "",
      email: "",
      message: "",
    });
  };

  const handleChange = (e) => {
    setContactmeDetails({
      ...contactmedetails,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <>
      <div id="contactme" className={styles.contactMeMainDiv}>
        <Heading heading={"Contact Me"} />
        <div className={styles.contactMeDIv}>
          <div className={styles.contactMeImgDiv}>
            <Image
              src={contactme}
              alt="Contact Me"
              priority
              className={styles.contactMeImg}
            />
          </div>
          <form className={styles.contactMeForm} onSubmit={handleSubmit}>
            <h2>Get in Touch</h2>

            <div className={styles.inpFieldDiv}>
              <FontAwesomeIcon icon={faUser} />
              <input
                type="text"
                name="name"
                value={contactmedetails.name}
                onChange={handleChange}
                className={styles.inpField}
                placeholder="Enter Your Name *"
              />
            </div>
            <div className={styles.inpFieldDiv}>
              <FontAwesomeIcon icon={faEnvelope} />
              <input
                type="email"
                name="email"
                value={contactmedetails.email}
                onChange={handleChange}
                className={styles.inpField}
                placeholder="Your Email *"
              />
            </div>
            <div className={styles.txtFieldDiv}>
              <FontAwesomeIcon icon={faComments} />
              <textarea
                name="message"
                value={contactmedetails.message}
                onChange={handleChange}
                className={styles.txtField}
                placeholder="Your Message *"
              ></textarea>
            </div>

            <button value={"submit"} className={styles.contactmeSubmitBtn}>
              <p id="spinner" className={styles.spinner} ref={loader}></p>
              <span ref={refSubmit}>Send Message</span>
            </button>
          </form>
        </div>
      </div>
    </>
  );
};

export default ContactMe;
