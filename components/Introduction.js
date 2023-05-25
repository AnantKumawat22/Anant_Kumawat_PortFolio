import React from "react";
import img3 from "../public/assets/images/background.png";
import Image from "next/image";
import wavingHand from "../public/assets/images/wavinghand.gif";
import Anant from "../public/assets/images/Anant.png";
import styles from "../styles/Introduction.module.css";
import Typewriter from "typewriter-effect";

const Introduction = () => {
  return (
    <>
      <div className={styles.introMain}>
        <div className={styles.introDesc}>
          <h1 className={styles.greet}>
            Hi{" "}
            <Image src={wavingHand} alt="waving hand" width={30} height={30} />
          </h1>

          <h1>
            <span className={styles.greet}>I'm</span>
            <span className={styles.name_span}>Anant Kumawat</span>
          </h1>
          <span className={styles.education_smalldesc}>
            B.Tech-CSE 2023, Institute of Technology and Management Gwalior,
            India.
          </span>

          <div className={styles.typewritterDiv}>
            <span>I am into </span>{" "}
            <Typewriter
              options={{
                strings: [
                  "Frontend Development",
                  "Backend Development",
                  "Data Structure and Algo.",
                ],
                autoStart: true,
                loop: true,
                delay: 50,
              }}
            />
          </div>

          <p className={styles.aboutme_desc}>
            I am a 4th year student and pursuing B.Tech in Computer Science and
            Engineering. I am highly passionate to work as a{" "}
            Full Stack Web Developer. I like to do{" "}
            problem solving, DSA questions and learning new Technologies.
          </p>

          <button className={styles.resume_btn}> Resume</button>
        </div>
        <div className={styles.myImage}>
          <Image
            src={img3}
            alt="About me"
            className={styles.myImageBG}
            width={363}
            height={453}
          />
          <Image
            src={Anant}
            alt="Anant Kumawat"
            className={styles.myImageAnant}
          />
        </div>
      </div>
    </>
  );
};

export default Introduction;
