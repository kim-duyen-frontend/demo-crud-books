import React from "react";
import styles from "../../styles/productinfo.module.scss";
const ProductInfo = ({ product }) => {
  return (
    <div className={styles.productinfo}>
      {/* <h3>{product.volumeInfo.title}</h3> */}
      <h1>Tiêu đề sản phẩm</h1>
    </div>
  );
};

export default ProductInfo;
