import React, { useContext } from "react";
import generalContext from "@/context/generalContext";

const SectionButton = (props) => {
  const context = useContext(generalContext);
  const { chooseSection,changeChooseSection } = context;
  const lowerBtnValue = props.btnValue.toLowerCase();

  const isMatched = chooseSection.chooseSkill == lowerBtnValue || chooseSection.chooseExperience == lowerBtnValue;

  return (
    <>
      <button
        onClick={(e) => {
          changeChooseSection(e.target.innerText.toLowerCase(), props.mainsection);
        }}
        style={{
          backgroundColor: isMatched ? "#7C3AED" : "#fff",
          color: isMatched ? "white" : "black",
        }}
        className="sectionChangeBtn"
      >
        {props.btnValue}
      </button>
    </>
  );
};

export default SectionButton;
