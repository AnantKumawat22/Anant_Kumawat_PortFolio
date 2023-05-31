import { useState } from "react";
import generalContext from "./generalContext";

const GeneralState = (props) => {
  // Common Choose Section
  const [chooseSection, setChooseSection] = useState({
    chooseSkill: "frontend",
    chooseExperience: "experience",
    chooseProject: "website",
    chooseCoursesAndCertificates: "courses",
    chooseCodingDSA: "leetcode"
  });
  
  const changeChooseSection = (text, sectionName) => {
    if (sectionName == "skill") {
      setChooseSection({...chooseSection, chooseSkill: text});
    } else if (sectionName == "experience") {
      setChooseSection({...chooseSection, chooseExperience: text});
    } else if(sectionName == "project"){
      setChooseSection({...chooseSection, chooseProject: text});
    } else if(sectionName == "coursesandcertificates"){
      setChooseSection({...chooseSection, chooseCoursesAndCertificates: text});
    } else if(sectionName == "codingdsa"){
      setChooseSection({...chooseSection, chooseCodingDSA: text});
    } 
  };

  return (
    <generalContext.Provider
      value={{
        chooseSection,
        changeChooseSection,
      }}
    >
      {props.children}
    </generalContext.Provider>
  );
};

export default GeneralState;
