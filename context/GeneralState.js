import { useState } from "react";
import generalContext from "./generalContext";

const GeneralState = (props) => {
  // Common Choose Section
  const [chooseSection, setChooseSection] = useState({
    chooseSkill: "frontend",
    chooseExperience: "experience",
  });
  
  const changeChooseSection = (text, sectionName) => {
    if (sectionName == "skill") {
      setChooseSection({...chooseSection, chooseSkill: text});
    } else if (sectionName == "experience") {
      setChooseSection({...chooseSection, chooseExperience: text});
    }
  };

  return (
    <generalContext.Provider
      value={{
        // chooseclr,
        chooseSection,
        setChooseSection,
        changeChooseSection,
      }}
    >
      {props.children}
    </generalContext.Provider>
  );
};

export default GeneralState;
