import React, { useEffect, useRef } from "react";
import styles from "../../styles/ExpEduCard.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBriefcase,
  faCircle,
  faGraduationCap,
} from "@fortawesome/free-solid-svg-icons";

const ExpEduCard = (props) => {
  const { index } = props;

  const changeFlexDir = useRef("");

  useEffect(() => {
    if (index % 2 == 0) {
      changeFlexDir.current.style.flexDirection = "row-reverse";
    } else {
      changeFlexDir.current.style.flexDirection = "row";
    }
  }, [changeFlexDir]);

  return (
    <>
      <div className={styles.ExpEduDiv} ref={changeFlexDir}>
        <div className={styles.EmptyDiv}></div>
        <span className={styles.ExpEduIcon}>
        {
          props.identifySection == "experience" ? <FontAwesomeIcon icon={faBriefcase} /> :
          <FontAwesomeIcon icon={faGraduationCap}/>
        }
          
        </span>
        <div className={styles.ExpEduMainCard}>
          <h1 className={styles.title}>{props.title}</h1>
          <p className={styles.titleDesc}>{props.titleDesc}</p>
          {props.expEduDesc.map((data, index) => {
            return (
              <p key={index} className={styles.expEduDesc}>
                <FontAwesomeIcon icon={faCircle} /> <span>{data}</span>
              </p>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default ExpEduCard;
