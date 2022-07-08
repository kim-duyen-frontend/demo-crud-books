import React, { useState, useEffect } from "react";
import { fetchListAPI, searchFilter } from "../../redux/actions";
import { useSelector, useDispatch } from "react-redux";
import ProductItem from "./ProductItem";
import styles from "../../styles/productlist.module.scss";
import SearchBar from "./SearchBar";

const ProductList = () => {
  // console.log("check list: ", list);
  const dispatch = useDispatch();
  const [search, setSearch] = useState("");
  const keySearchText = useSelector((state) => state.filter.search);
  // console.log(keySearchText);
  const list = useSelector((state) => {
    if (search) {
      return state.list.filter((item) =>
        item.etag.toLowerCase().includes(keySearchText)
      );
    }
    return state.list;
  });
  // console.log("check list: ", list);
  useEffect(() => {
    dispatch(fetchListAPI());
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  const handleSearchText = (event) => {
    setSearch(event.target.value);
    dispatch(searchFilter(event.target.value));
  };
  return (
    <>
      <SearchBar search={search} handleSearchText={handleSearchText} />
      <div className={styles.productlist}>
        {list.map((book) => (
          <ProductItem key={book.id} product={book} />
        ))}
      </div>
    </>
  );
};

export default ProductList;
