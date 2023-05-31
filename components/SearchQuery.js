import React, { useState } from 'react';
import styles from '../styles/SearchQuery.module.css';

const SearchQuery = () => {
  const [searchTerm, setSearchTerm] = useState("");

  const handleChange = (e) => {
    setSearchTerm(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSearchTerm("");
  };

  return (
    <form className={styles.searchForm} onSubmit={handleSubmit}>
      <input
        type="text"
        className={styles.searchInput}
        placeholder="Search..."
        value={searchTerm}
        onChange={handleChange}
      />
      <button type="submit" className={styles.searchButton}>
        Search
      </button>
    </form>
  );
};

export default SearchQuery;
