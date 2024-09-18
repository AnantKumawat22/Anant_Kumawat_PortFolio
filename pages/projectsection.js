import Others from "@/components/Projects/Others";
import FlutterApp from "@/components/Projects/FlutterApp";
import Website from "@/components/Projects/Website";
import generalContext from "@/context/generalContext";
import React, { useContext, useEffect, useState } from "react";
import styles from "../styles/projectsection.module.css";
import Heading from "@/components/atoms/Heading";
import SectionButton from "@/components/atoms/SectionButton";
import ImageCarousel from "@/components/ImageCarousel";


const projectSection = () => {
  const [jsonData, setJsonData] = useState(null);

  const context = useContext(generalContext);
  const { chooseSection } = context;
  const { chooseProject } = chooseSection;

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch("/project.json");
      const data = await response.json();
      setJsonData(data);
    };

    fetchData();
  }, []);

  return (
    <>
    {
      jsonData && <ImageCarousel imageCarouselData={jsonData.projectSecImageSlider} />
    }
      
      <div className={styles.projectSecDiv}>
        <Heading heading={"Projects"} />
        <div className="secChangeDivHeading">
          <SectionButton btnValue={"Website"} mainsection={"project"} />
          <SectionButton btnValue={"Others"} mainsection={"project"} />
          <SectionButton btnValue={"Flutter App"} mainsection={"project"} />
        </div>
        <div className={styles.containerProSecDiv}>
          {chooseProject == "website" && <Website />}
          {chooseProject == "others" && <Others />}
          {chooseProject == "flutterapp" && <FlutterApp />}
        </div>
      </div>
    </>
  );
};

export default projectSection;
