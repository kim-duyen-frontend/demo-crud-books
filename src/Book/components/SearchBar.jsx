import React from "react";
import styles from "../../styles/searchbar.module.scss";

const SearchBar = ({ search, handleSearchText }) => {
  return (
    <div className={styles.searchbar}>
      <input
        className={styles.inputsearch}
        placeholder="Tìm kiếm..."
        value={search}
        onChange={handleSearchText}
      />
    </div>
  );
};

export default SearchBar;
