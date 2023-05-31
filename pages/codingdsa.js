import generalContext from "@/context/generalContext";
import React, { useContext, useEffect, useState } from "react";
import styles from "../styles/codingdsa.module.css";
import Heading from "@/components/atoms/Heading";
import SectionButton from "@/components/atoms/SectionButton";
import ImageCarousel from "@/components/ImageCarousel";
import LeetCode from "@/components/CodingDSA/LeetCode";
import GeeksForGeeks from "@/components/CodingDSA/GeeksForGeeks";
import SearchQuery from "@/components/SearchQuery";

const codingdsa = () => {
  const [jsonData, setJsonData] = useState(null);

  const context = useContext(generalContext);
  const { chooseSection } = context;
  const { chooseCodingDSA } = chooseSection;

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
      jsonData && <ImageCarousel imageCarouselData={jsonData.codingDSASecImageSlider} />
    }
      
      <div className={styles.codingDSASecDiv}>
        <Heading heading={"Coding DSA"} />
        <div className="secChangeDivHeading">
          <SectionButton btnValue={"LeetCode"} mainsection={"codingdsa"} />
          <SectionButton btnValue={"GeeksForGeeks"} mainsection={"codingdsa"} />
        </div>
        <div className={styles.containerProSecDiv}>
          {chooseCodingDSA == "leetcode" && <LeetCode />}
          {chooseCodingDSA == "geeksforgeeks" && <GeeksForGeeks />}
        </div>
        <SearchQuery/>
      </div>
    </>
  );
};

export default codingdsa;
