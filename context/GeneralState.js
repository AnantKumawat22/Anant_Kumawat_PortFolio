import { useState } from "react";
import generalContext from "./generalContext";
import { ToastContainer, toast } from 'react-toastify';

const GeneralState = (props) => {
  // Common Choose Section
  const [chooseSection, setChooseSection] = useState({
    chooseSkill: "frontend",
    chooseExperience: "experience",
    chooseProject: "website",
    chooseCoursesAndCertificates: "courses",
    chooseCodingDSA: "leetcode",
  });

  const changeChooseSection = (text, sectionName) => {
    if (sectionName == "skill") {
      setChooseSection({ ...chooseSection, chooseSkill: text });
    } else if (sectionName == "experience") {
      setChooseSection({ ...chooseSection, chooseExperience: text });
    } else if (sectionName == "project") {
      setChooseSection({ ...chooseSection, chooseProject: text });
    } else if (sectionName == "coursesandcertificates") {
      setChooseSection({
        ...chooseSection,
        chooseCoursesAndCertificates: text,
      });
    } else if (sectionName == "codingdsa") {
      setChooseSection({ ...chooseSection, chooseCodingDSA: text });
    }
  };

  const [leetCodeData, setLeetCodeData] = useState("");
  const [geeksForGeeksData, setGeeksForGeeksData] = useState("");
  const [searchCodingQues, setSearchCodingQues] = useState({
    searchCodingQuesLeet: "",
    searchCodingQuesGFG: "",
  });


  const showAlert = (msg, type) => {
    if(type == "success"){
      toast.success(`${msg}`, {
        position: "top-right",
        autoClose: 4000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
        });
    } else if(type == "error"){
      toast.error(`${msg}`, {
        position: "top-right",
        autoClose: 4000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
        });
    }
  }

  return (
    <generalContext.Provider
      value={{
        chooseSection,
        changeChooseSection,
        leetCodeData,
        setLeetCodeData,
        geeksForGeeksData,
        setGeeksForGeeksData,
        setSearchCodingQues,
        searchCodingQues, showAlert
      }}
    >
      <ToastContainer
        position="top-right"
        autoClose={4000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
      />
      {props.children}
    </generalContext.Provider>
  );
};

export default GeneralState;
