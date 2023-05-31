import React from "react";
import styles from "../../styles/codingQuestionsCard.module.css";
import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleCheck } from "@fortawesome/free-solid-svg-icons";

const codingQuestionsCard = () => {
  return (
    <>
      <div className={styles.codingQuesCard}>
        <div className={styles.codingQues}>
          <h1 className={styles.quesName}>Hello</h1>
          <span className={styles.quesLevel}>easy</span>
        </div>

        <Link href={"#"} className="common_lnk">
          {" "}
          Solution <FontAwesomeIcon icon={faCircleCheck}/>
        </Link>
      </div>
    </>
  );
};

export default codingQuestionsCard;
