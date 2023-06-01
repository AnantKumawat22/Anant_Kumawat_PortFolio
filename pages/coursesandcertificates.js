import generalContext from "@/context/generalContext";
import React, { useContext, useEffect, useState } from "react";
import styles from "../styles/coursesandcertifications.module.css";
import Heading from "@/components/atoms/Heading";
import SectionButton from "@/components/atoms/SectionButton";
import ImageCarousel from "@/components/ImageCarousel";
import Courses from "@/components/CoursesAndCertificates/Courses";
import Certificates from "@/components/CoursesAndCertificates/Certificates";

const coursesAndCertificates = () => {
  const [jsonData, setJsonData] = useState(null);

  const context = useContext(generalContext);
  const { chooseSection } = context;
  const { chooseCoursesAndCertificates } = chooseSection;

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
      jsonData && <ImageCarousel imageCarouselData={jsonData.coursesAndCertificatesSecImageSlider} />
    }
      
      <div className={styles.CourandCerSecDiv}>
        <h1 className={styles.courAndCerHeading}>Courses and Certificates</h1>
        <div className="secChangeDivHeading">
          <SectionButton btnValue={"Courses"} mainsection={"coursesandcertificates"} />
          <SectionButton btnValue={"Certificates"} mainsection={"coursesandcertificates"} />
        </div>
        <div className={styles.containerProSecDiv}>
          {chooseCoursesAndCertificates == "courses" && <Courses />}
          {chooseCoursesAndCertificates == "certificates" && <Certificates />}
        </div>
      </div>
    </>
  );
};

export default coursesAndCertificates;
