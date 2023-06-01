import React, { useContext, useEffect, useState } from "react";
import CodingQuestionsCard from "./codingQuestionsCard";
import generalContext from "@/context/generalContext";
import InfiniteScroll from "react-infinite-scroll-component";

const LeetCode = () => {
  const context = useContext(generalContext);
  const { leetCodeData, setLeetCodeData, searchCodingQues } = context;

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch("/data.json");
      const data = await response.json();
      setLeetCodeData(data.codingDSA.leetcode);
    };

    fetchData();
  }, []);

  // Infinite Scroll
  const [items, setItems] = useState([...leetCodeData]);
  const [hasMore, setHasMore] = useState(true);

  const fetchMoreData = () => {
    const newData = leetCodeData.slice(items.length, items.length + 10);
    setItems([...items, ...newData]);
    if (newData.length === 0) {
      setHasMore(false);
    }
  };

  return (
    <>
      {searchCodingQues.searchCodingQuesLeet === "" ? (
        <InfiniteScroll
          dataLength={items.length}
          next={fetchMoreData}
          hasMore={hasMore}
          loader={<h4>Loading...</h4>}
          endMessage={<p>No more items to load.</p>}
        >
          {leetCodeData &&
            leetCodeData.map((data, index) => (
              <CodingQuestionsCard key={index} codingDSAQues={data} />
            ))}
        </InfiniteScroll>
      ) : (
        searchCodingQues.searchCodingQuesLeet.map((data, index) => (
          <CodingQuestionsCard key={index} codingDSAQues={data} />
        ))
      )}
    </>
  );
};

export default LeetCode;
