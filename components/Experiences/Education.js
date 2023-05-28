import React, { useEffect, useState } from "react";
import ExpEduCard from "./ExpEduCard";

const Education = () => {
  const [jsonData, setJsonData] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch("/data.json");
      const data = await response.json();
      setJsonData(data.experienceSection.education);
    };

    fetchData();
  }, []);

  return (
  <>
    {jsonData && jsonData.map((data, index) => {
        return <ExpEduCard identifySection={'education'} key={index} title={data.educationFrom} titleDesc={data.branch} expEduDesc={data.educationDesc} index={index} />;
    })}
  </>
  );
};

export default Education;
