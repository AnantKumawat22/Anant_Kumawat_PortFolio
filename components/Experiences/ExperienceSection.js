import React, { useContext } from "react";
import Heading from "../atoms/Heading";
import styles from "../../styles/ExperienceSection.module.css"
import generalContext from "@/context/generalContext";
import Experience from "./Experience";
import Education from "./Education";
import SectionButton from "../atoms/SectionButton";

const ExperienceSection = () => {
  const context = useContext(generalContext);
  const { chooseSection } = context;
  const { chooseExperience } = chooseSection;

  return (
    <>
      <div className={styles.experienceSecDiv}>
        <Heading heading={"Experience"} />
        <div className="secChangeDivHeading">
          <SectionButton btnValue={"Experience"} mainsection={'experience'} />
          <SectionButton btnValue={"Education"} mainsection={'experience'} />
        </div>
        <div className={styles.containerExpSecDiv}>
          <div className={styles.ExpEduLine}></div>
          {chooseExperience == "experience" && <Experience/>}
          {chooseExperience == "education" && <Education/>}
        </div>
      </div>
    </>
  );
};

export default ExperienceSection;
