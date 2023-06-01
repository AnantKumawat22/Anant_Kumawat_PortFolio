import React, { useContext, useState } from "react";
import styles from "../styles/SearchQuery.module.css";
import generalContext from "@/context/generalContext";

const SearchQuery = () => {
  const [searchTerm, setSearchTerm] = useState("");

  const handleChange = (e) => {
    setSearchTerm(e.target.value);
  };

  // Context
  const context = useContext(generalContext);
  const {
    chooseSection,
    leetCodeData,
    geeksForGeeksData,
    searchCodingQues,
    setSearchCodingQues,
  } = context;

  const handleSubmit = (e) => {
    e.preventDefault();

    let searchFilter;
    let filterData;

    if(searchTerm === "") return;

    if (chooseSection.chooseCodingDSA == "leetcode") {
      searchFilter = leetCodeData;
    } else if (chooseSection.chooseCodingDSA == "geeksforgeeks") {
      searchFilter = geeksForGeeksData;
    }
    let mapData = searchFilter?.map((data) => {
      let checkques = data.question
        .toLowerCase()
        .includes(searchTerm?.toLowerCase()?.trim());
      return checkques != false ? data : false;
    });
    filterData = mapData.filter((data) => data);

    if (chooseSection.chooseCodingDSA == "leetcode") {
      setSearchCodingQues({...searchCodingQues, searchCodingQuesLeet: filterData})
    } else if (chooseSection.chooseCodingDSA == "geeksforgeeks") {
      setSearchCodingQues({...searchCodingQues, searchCodingQuesGFG: filterData})
    }
    setSearchTerm("");
  };

  const handleReset = () => {
    if (chooseSection.chooseCodingDSA == "leetcode") {
      setSearchCodingQues({...searchCodingQues, searchCodingQuesLeet: ''})
    } else if (chooseSection.chooseCodingDSA == "geeksforgeeks") {
      setSearchCodingQues({...searchCodingQues, searchCodingQuesGFG: ''})
    }
    setSearchTerm("");
  }

  return (
    <form className={styles.searchForm} onSubmit={handleSubmit}>
      <input
        type="text"
        className={styles.searchInput}
        placeholder="Search by question name..."
        value={searchTerm}
        onChange={handleChange}
      />
      <div className={styles.searchQuesBtn}>
        <button type="submit" className={styles.searchButton}>
          Search
        </button>
        <button type="reset" onClick={handleReset} className={styles.searchButton} style={{backgroundColor: '#e8b917'}}>
          Reset
        </button>
      </div>
    </form>
  );
};

export default SearchQuery;
