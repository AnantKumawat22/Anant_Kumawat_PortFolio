import React from "react";
import Image from "next/image";
import Link from "next/link";
import styles from "../styles/Footer.module.css";
import linkedin from "../public/assets/images/socialmedia/linkedin.gif";
import github from "../public/assets/images/socialmedia/github.gif";
import twitter from "../public/assets/images/socialmedia/twitter.gif";
import instagram from "../public/assets/images/socialmedia/instagram.gif";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart } from "@fortawesome/free-solid-svg-icons";

const Footer = () => {
  return (
    <>
      <div className={styles.footerMainDiv}>
        <div className={styles.socialProfile}>
          <Link href="https://www.linkedin.com/in/anant-kumawat/" target="_blank">
            <Image src={linkedin} alt="Social Media Link" />
          </Link>
          <Link href="https://github.com/AnantKumawat22" target="_blank">
            <Image src={github} alt="Social Media Link" />
          </Link>
          <Link href="https://twitter.com/AnantKumawat02" target="_blank">
            <Image src={twitter} alt="Social Media Link" />
          </Link>
          <Link href="" target="_blank">
            <Image src={instagram} alt="Social Media Link" />
          </Link>
        </div>
        <div className={styles.createdBy}>
          <p>
            <span>Made with </span>
            <FontAwesomeIcon icon={faHeart} />
            <span> by </span>
            <span className={styles.creatorName}>Anant Kumawat</span>
          </p>
        </div>
      </div>
    </>
  );
};

export default Footer;
