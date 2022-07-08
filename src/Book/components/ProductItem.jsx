import React from "react";
import { useHistory } from "react-router-dom";
import styles from "../../styles/productitem.module.scss";

const ProductItem = ({ product }) => {
  //   console.log(product.volumeInfo.imageLinks);
  const history = useHistory();
  const handleClick = () => {
    history.push(`/products/${product.id}`);
  };
  return (
    <div className={styles.productitem} onClick={handleClick}>
      <div className={styles.image}>
        <img
          src={
            product.volumeInfo.imageLinks === undefined
              ? ""
              : `${product.volumeInfo.imageLinks.thumbnail}`
          }
          alt={product.volumeInfo.title}
        />
      </div>
      <div className={styles.title}>
        <h3>{product.volumeInfo.title}</h3>
      </div>
    </div>
  );
};

export default ProductItem;
