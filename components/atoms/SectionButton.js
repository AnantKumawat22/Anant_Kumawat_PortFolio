import React, { useContext } from "react";
import generalContext from "@/context/generalContext";

const SectionButton = (props) => {
  const context = useContext(generalContext);
  const { chooseSection, changeChooseSection } = context;
  const lowerBtnValue = props.btnValue.toLowerCase().replace(/\s/g, "");

  const isMatched =
    chooseSection.chooseSkill == lowerBtnValue ||
    chooseSection.chooseExperience == lowerBtnValue ||
    chooseSection.chooseProject == lowerBtnValue ||
    chooseSection.chooseCoursesAndCertificates == lowerBtnValue ||
    chooseSection.chooseCodingDSA == lowerBtnValue; 

  return (
    <>
      <button
        onClick={(e) => {
          changeChooseSection(
            e.target.innerText.toLowerCase().replace(/\s/g, ""),
            props.mainsection
          );
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
