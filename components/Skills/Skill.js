import React, { useContext } from "react";
import Frontend from "./Frontend";
import Backend from "./Backend";
import Others from "./Others";
import SectionButton from "../atoms/SectionButton";
import Heading from "../atoms/Heading";
import styles from '../../styles/Skill.module.css';
import generalContext from "@/context/generalContext";

const Skills = () => {
  const context = useContext(generalContext);
  const { chooseSection } = context;
  const { chooseSkill } = chooseSection;

  return (
    <>
      <div className={styles.skillDiv}>
        <Heading heading={"Skills"} />
        <div className="secChangeDivHeading">
          <SectionButton btnValue={"Frontend"} mainsection={'skill'} />
          <SectionButton btnValue={"Backend"} mainsection={'skill'} />
          <SectionButton btnValue={"Others"} mainsection={'skill'} />
        </div>
        <div className={styles.containerSkillDiv}>
          {chooseSkill == "frontend" && <Frontend />}
          {chooseSkill == "backend" && <Backend />}
          {chooseSkill == "others" && <Others />}
        </div>
      </div>
    </>
  );
};

export default Skills;
