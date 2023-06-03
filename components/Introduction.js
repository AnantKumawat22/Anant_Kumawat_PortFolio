import React, { useEffect, useState } from "react";
import img3 from "../public/assets/images/background.png";
import Image from "next/image";
import wavingHand from "../public/assets/images/wavinghand.gif";
import Anant from "../public/assets/images/Anant.png";
import styles from "../styles/Introduction.module.css";
import Typewriter from "typewriter-effect";
import Link from "next/link";

const Introduction = () => {
  const [jsonData, setJsonData] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch("/introduction.json");
      const data = await response.json();
      setJsonData(data.introduction);
    };

    fetchData();
  }, []);

  return (
    <>
      {jsonData && (
        <div className={styles.introMain}>
          <div className={styles.introDesc}>
            <h1 className={styles.greet}>
              Hi{" "}
              <Image
                src={wavingHand}
                alt="waving hand"
                width={30}
                height={30}
              />
            </h1>

            <h1>
              <span className={styles.greet}>I'm</span>
              <span className={styles.name_span}>{jsonData.name}</span>
            </h1>
            <span className={styles.education_smalldesc}>
              {jsonData.educationSmallDesc}
            </span>

            <div className={styles.typewritterDiv}>
              <span>I am into </span>{" "}
              <Typewriter
                options={{
                  strings: jsonData.TypewriterTitles,
                  autoStart: true,
                  loop: true,
                  delay: 40,
                }}
              />
            </div>

            <p className={styles.aboutme_desc}>{jsonData.aboutMeDesc}</p>

            <Link
              href={
                "https://drive.google.com/file/d/1zKQYL8Xlhuz2N627DJGsNuyF3RAXANud/view?usp=drive_link"
              }
              target="_blank"
              className="common_lnk"
            >
              {" "}
              Resume
            </Link>
          </div>
          <div className={styles.myImage}>
            <Image
              src={img3}
              alt="About me"
              priority
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
      )}
    </>
  );
};

export default Introduction;
