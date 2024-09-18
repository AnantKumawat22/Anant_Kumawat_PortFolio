import React, { useEffect, useState } from "react";
import ProCourCard from "../ProCourCard";

const Others = () => {
  const [jsonData, setJsonData] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch("/project.json");
      const data = await response.json();
      setJsonData(data.projects.others);
    };

    fetchData();
  }, []);

  return (
    <>
      {jsonData &&
        jsonData.map((data, index) => {
          return (
            <ProCourCard
              key={index}
              proCourName={data.ProjectName}
              proCourNameDesc={data.ProjectNameDesc}
              proCourDesc={data.ProjectDesc}
              img={data.img}
              link_1={data.link_1}
              link_2={data.link_2}
              link_1Href={data.codeLink}
              link_2Href={data.liveLink}
            />
          );
        })}
    </>
  );
};

export default Others;
