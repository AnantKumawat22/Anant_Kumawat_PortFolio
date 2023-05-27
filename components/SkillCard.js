import React from "react";
import Image from "next/image";
import styles from "../styles/SkillCard.module.css";

const SkillCard = (props) => {
  return (
    <>
      <div className={styles.skillGridContainer}>
        <div className={styles.skillCard}>
          <Image
            src={props.imgSrc}
            alt="skills"
            className={styles.skillImage}
            width={612}
            height={408}
          />
        </div>
        <p className={styles.skillName}>{props.skillName}</p>
      </div>
    </>
  );
};

export default SkillCard;
