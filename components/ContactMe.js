import React from "react";
import styles from "../styles/ContactMe.module.css";
import Image from "next/image";
import contactme from "../public/assets/images/contactme.png";
import Heading from "./atoms/Heading";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faComment,
  faComments,
  faEnvelope,
  faMessage,
  faUser,
} from "@fortawesome/free-solid-svg-icons";

const ContactMe = () => {
  return (
    <>
      <div className={styles.contactMeMainDiv}>
        <Heading heading={"Contact Me"} />
        <div className={styles.contactMeDIv}>
          <div className={styles.contactMeImgDiv}>
            <Image
              src={contactme}
              alt="Contact Me"
              className={styles.contactMeImg}
            />
          </div>
          <form className={styles.contactMeForm}>
            <h2>Get in Touch</h2>

            <div className={styles.inpFieldDiv}>
              <FontAwesomeIcon icon={faUser} />
              <input
                type="text"
                name="name"
                className={styles.inpField}
                placeholder="Enter Your Name *"
              />
            </div>
            <div className={styles.inpFieldDiv}>
              <FontAwesomeIcon icon={faEnvelope} />
              <input
                type="email"
                name="email"
                className={styles.inpField}
                placeholder="Your Email *"
              />
            </div>
            <div className={styles.txtFieldDiv}>
              <FontAwesomeIcon icon={faComments} />
              <textarea
                name="message"
                className={styles.txtField}
                placeholder="Your Message *"
              ></textarea>
            </div>
            <button className="common_btn"> Send Message</button>
          </form>
        </div>
      </div>
    </>
  );
};

export default ContactMe;
