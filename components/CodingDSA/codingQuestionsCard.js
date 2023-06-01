import React from "react";
import styles from "../../styles/codingQuestionsCard.module.css";
import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleCheck } from "@fortawesome/free-solid-svg-icons";

const codingQuestionsCard = (props) => {
  const data = props.codingDSAQues;

  return (
    <>
      <div className={styles.codingQuesCard}>
        <div className={styles.codingQues}>
          <h1 className={styles.quesName}>{data.question}</h1>
          <span
            className={styles.quesLevel}
            style={{ backgroundColor : (data.level == "Easy" || data.level == "Basic") && '#4caf50' || data.level == "Medium" && '#e8b917' || data.level == "Hard" && '#e34848' }}
          >
            {data.level}
          </span>
        </div>

        <Link href={`${data.solutionLink}`} target="_blank" className="common_lnk">
          {" "}
          Solution <FontAwesomeIcon icon={faCircleCheck} />
        </Link>
      </div>
    </>
  );
};

export default codingQuestionsCard;
