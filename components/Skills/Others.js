import React, { useEffect, useState } from "react";
import SkillCard from "@/components/Skills/SkillCard";

const others = () => {
  const [jsonData, setJsonData] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch("/skills.json");
      const data = await response.json();
      setJsonData(data.skills);
    };

    fetchData();
  }, []);

  return (
    <>
      {jsonData &&
        jsonData.others.map((data, index) => {
          return (
            <>
              <SkillCard key={index} imgSrc={data.imgSrc} skillName={data.skillName} />
            </>
          );
        })}
    </>
  );
};

export default others;
