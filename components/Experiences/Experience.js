import React, { useEffect, useState } from "react";
import ExpEduCard from "./ExpEduCard";

const Experience = () => {
  const [jsonData, setJsonData] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch("/data.json");
      const data = await response.json();
      setJsonData(data.experienceSection.experience);
    };

    fetchData();
  }, []);

  return (
  <>
    {jsonData && jsonData.map((data, index) => {
        return <ExpEduCard identifySection={'experience'} key={index} title={data.companyName} titleDesc={data.role} expEduDesc={data.roleDesc} index={index} />;
    })}
  </>
  );
};

export default Experience;
