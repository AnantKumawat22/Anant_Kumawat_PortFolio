import BasicWebProject from "@/components/Projects/BasicWebProject";
import FlutterApp from "@/components/Projects/FlutterApp";
import Website from "@/components/Projects/Website";
import generalContext from "@/context/generalContext";
import React, { useContext } from "react";
import styles from "../styles/projectsection.module.css";
import Heading from "@/components/atoms/Heading";
import SectionButton from "@/components/atoms/SectionButton";
import img from '../public/assets/images/projects/img.png';
import SimpleImageSlider from "react-simple-image-slider";

const projectSection = () => {
  // Image Carousel
  const images = [
    // { url: "https://wallpaperaccess.com/full/1947431.jpg" },
    // { url: "https://www.fonttr.com/yone/prev/noticia-text-1.jpg" },
    { url: img },
    // { url: "images/4.jpg" },
    // { url: "images/5.jpg" },
    // { url: "images/6.jpg" },
    // { url: "images/7.jpg" },
  ];
  const context = useContext(generalContext);
  const { chooseSection } = context;
  const { chooseProject } = chooseSection;

  return (
    <>
    <SimpleImageSlider className={styles.imageSlider}
        images={images}
        width={'100%'}
        height={'50vh'}
        showBullets={true}
        showNavs={true}
        autoPlay={true}
      />
      <div className={styles.projectSecDiv}>
        <Heading heading={"Projects"} />
        <div className="secChangeDivHeading">
          <SectionButton btnValue={"Website"} mainsection={"project"} />
          <SectionButton btnValue={"Basic Web"} mainsection={"project"} />
          <SectionButton btnValue={"Flutter App"} mainsection={"project"} />
        </div>
        <div className={styles.containerProSecDiv}>
          {chooseProject == "website" && <Website />}
          {chooseProject == "basicweb" && <BasicWebProject />}
          {chooseProject == "flutterapp" && <FlutterApp />}
        </div>
      </div>
    </>
  );
};

export default projectSection;
