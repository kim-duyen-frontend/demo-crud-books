import React, { useState } from "react";
import { useEffect } from "react";
import { useRouteMatch } from "react-router-dom";
import productApi from "../../utils/calldetailproductAPI";
import styles from "../../styles/detailpage.module.scss";
import ProductThumbnail from "../components/ProductThumbnail";
import ProductInfo from "../components/ProductInfo";

const DetailPage = () => {
  const [product, setProduct] = useState({});
  const match = useRouteMatch();
  // console.log(match);
  const getData = async () => {
    const response = await productApi.get(match.params.productId);
    const data = response && response.data ? response.data.items : {};
    setProduct(data);
  };
  useEffect(() => {
    getData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [match.params.productId]);
  console.log(">>check product detail: ", product);
  return (
    <div className={styles.detail}>
      <div className={styles.left}>
        <ProductThumbnail product={product} />
      </div>
      <div className={styles.right}>
        <ProductInfo product={product} />
      </div>
    </div>
  );
};

export default DetailPage;
