import React, { useState } from "react";
import Frontend from "@/pages/skills/frontend";
import Backend from "@/pages/skills/backend";
import Others from "@/pages/skills/others";
import styles from "../styles/Skills.module.css";

const Skills = () => {
  const [chooseSkill, setChooseSkill] = useState("frontend");

  const changeChooseSkill = (e) => {
    let text = e.target.innerText.toLowerCase();
    setChooseSkill(text);
  }

  return (
    <>
      <div className={styles.skillDiv}>
        <h1 className={styles.skillHead}>Skills</h1>
        <div className={styles.skillsHeading}>
          <button onClick={changeChooseSkill} style={{'backgroundColor': chooseSkill == "frontend" ? '#7C3AED' : '#fff', 'color': chooseSkill == "frontend" ? 'white' : 'black' }}  className={styles.skillHeadingBtn}>
            Frontend
          </button>
          <button onClick={changeChooseSkill} style={{'backgroundColor': chooseSkill == "backend" ? '#7C3AED' : '#fff', 'color': chooseSkill == "backend" ? 'white' : 'black' }}  className={styles.skillHeadingBtn}>
            Backend
          </button>
          <button onClick={changeChooseSkill}
          style={{'backgroundColor': chooseSkill == "others" ? '#7C3AED' : '#fff', 'color': chooseSkill == "others" ? 'white' : 'black' }} 
          className={styles.skillHeadingBtn}>
            Others
          </button>
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
