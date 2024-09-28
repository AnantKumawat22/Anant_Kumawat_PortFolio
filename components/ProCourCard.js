import React, { useState } from "react";
import styles from "../styles/ProCourCard.module.css";
import Image from "next/image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCircle,
  faLink,
  faSquareArrowUpRight,
} from "@fortawesome/free-solid-svg-icons";
import { useRouter } from "next/router";
import Link from "next/link";

const ProCourCard = (props) => {
  const router = useRouter();
  const [showFullDescription, setShowFullDescription] = useState(false);

  const toggleDescription = () => {
    setShowFullDescription(!showFullDescription);
  };

  const wrapText = (sentence, size) => {
    let str = "";
    for (let x = 0; sentence[x] && x < size; x++) {
      str += sentence[x];
    }
    return str;
  };

  const wrappedSentence = wrapText(props.proCourDesc[0], 74);

  return (
    <>
      <div className={styles.ProCourCardMainDiv}>
        <div className={styles.ProCourCardImgDiv}>
          <Image src={props.img} width={1920} height={1080} alt="Card Image" />
        </div>
        <div className={styles.ProCourCardDetail}>
          <p className={styles.proCourName}>{props.proCourName}</p>
          <p className={styles.proCourNameDesc}>{props.proCourNameDesc}</p>

          <div className={styles.proCourDescDiv} onClick={toggleDescription}>
            {!showFullDescription && (
              <p style={{ cursor: "pointer" }} className={styles.proCourDesc}>
                <FontAwesomeIcon
                  icon={faCircle}
                  style={{ fontSize: "8px", marginRight: "3px" }}
                />{" "}
                {wrappedSentence}
              </p>
            )}

            {!showFullDescription && (
              <span
                onClick={toggleDescription}
                style={{ color: "#7C3AED", cursor: "pointer" }}
              >
                ...See more
              </span>
            )}
            {showFullDescription &&
              props.proCourDesc.map((data, index) => {
                return (
                  <p
                    style={{ cursor: "pointer" }}
                    key={index}
                    className={styles.proCourDesc}
                  >
                    <FontAwesomeIcon
                      icon={faCircle}
                      style={{ fontSize: "8px", marginRight: "3px" }}
                    />{" "}
                    {data}
                  </p>
                );
              })}

            {showFullDescription && (
              <span
                onClick={toggleDescription}
                style={{ color: "#7C3AED", cursor: "pointer" }}
              >
                ...See less
              </span>
            )}
          </div>

          <div className={styles.ProCourBtn}>
            <Link
              href={props.link_1Href}
              target="_blank"
              className="common_lnk"
              style={{ marginRight: "10px" }}
            >
              <span>{`${props.link_1}`}</span>
              <FontAwesomeIcon
                icon={faLink}
                style={{ marginLeft: "5px", fontSize: "15px" }}
              />{" "}
            </Link>
            <Link
              href={`${props.link_2Href}`}
              style={{ display: props.link_2 == "Disabled" ? "none" : "" }}
              target="_blank"
              className="common_lnk"
            >
              <span>{props.link_2}</span>
              <FontAwesomeIcon
                icon={faSquareArrowUpRight}
                style={{ marginLeft: "5px", fontSize: "15px" }}
              />
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default ProCourCard;
