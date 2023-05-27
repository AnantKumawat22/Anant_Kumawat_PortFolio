import React, { useEffect, useState } from "react";
import SkillCard from "@/components/SkillCard";

const frontend = () => {
  const [jsonData, setJsonData] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch("/data.json");
      const data = await response.json();
      setJsonData(data.skills);
    };

    fetchData();
  }, []);

  return (
    <>
      {jsonData &&
        jsonData.frontend.map((data) => {
          return (
            <>
              <SkillCard imgSrc={data.imgSrc} skillName={data.skillName} />
            </>
          );
        })}
    </>
  );
};

export default frontend;
