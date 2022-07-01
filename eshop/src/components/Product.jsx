import { useEffect, useState } from "react";
import data from "../data/products";
const Product = () => {
  const [product, setProduct] = useState([]);
  useEffect(() => {
    setProduct(data);
  }, [product]);
  console.log("data10", data);
  return <></>;
};
export default Product;
