import React, { useContext, useEffect, useState } from "react";
import CodingQuestionsCard from "./codingQuestionsCard";
import generalContext from "@/context/generalContext";
import InfiniteScroll from "react-infinite-scroll-component";

const GeeksForGeeks = () => {
  const context = useContext(generalContext);
  const { geeksForGeeksData, setGeeksForGeeksData, searchCodingQues } = context;

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch("/codingdsa.json");
      const data = await response.json();
      setGeeksForGeeksData(data.codingDSA.geeksforgeeks);
    };

    fetchData();
  }, []);

  // Infinite Scroll
  const [items, setItems] = useState([...geeksForGeeksData]);
  const [hasMore, setHasMore] = useState(true);

  const fetchMoreData = () => {
    const newData = geeksForGeeksData.slice(items.length, items.length + 10);
    setItems([...items, ...newData]);
    if (newData.length === 0) {
      setHasMore(false);
    }
  }; 

  return (
    <>
      {searchCodingQues.searchCodingQuesGFG === "" ? (
        <InfiniteScroll
          dataLength={items.length}
          next={fetchMoreData}
          hasMore={hasMore}
          loader={<h4>Loading...</h4>}
          endMessage={<p>No more items to load.</p>}
        >
          {geeksForGeeksData &&
            geeksForGeeksData.map((data, index) => (
              <CodingQuestionsCard key={index} codingDSAQues={data} />
            ))}
        </InfiniteScroll>
      ) : (
        searchCodingQues.searchCodingQuesGFG.map((data, index) => (
          <CodingQuestionsCard key={index} codingDSAQues={data} />
        ))
      )}
    </>
  );
};

export default GeeksForGeeks;
