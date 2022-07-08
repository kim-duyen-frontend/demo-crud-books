import React from "react";
import styles from "../../styles/productthumbnail.module.scss";

const ProductThumbnail = ({ product }) => {
  return (
    <div className={styles.productthumbnail}>
      <img
        src="http://books.google.com/books/content?id=oesuzgEACAAJ&printsec=frontcover&img=1&zoom=5&source=gbs_api"
        alt=""
      />
      {/* <img
        src={product.volumeInfo.imageLinks && product.volumeInfo.imageLinks.smallThumbnail}
        alt="img"
      /> */}
    </div>
  );
};

export default ProductThumbnail;
