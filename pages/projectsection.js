import BasicWeb from "@/components/Projects/BasicWeb";
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
      const response = await fetch("/data.json");
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
          <SectionButton btnValue={"Basic Web"} mainsection={"project"} />
          <SectionButton btnValue={"Flutter App"} mainsection={"project"} />
        </div>
        <div className={styles.containerProSecDiv}>
          {chooseProject == "website" && <Website />}
          {chooseProject == "basicweb" && <BasicWeb />}
          {chooseProject == "flutterapp" && <FlutterApp />}
        </div>
      </div>
    </>
  );
};

export default projectSection;
