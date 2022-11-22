import { useContext, useEffect, useState } from "react";
import { Carousel, Products, Viewport } from "../";
import ProductContext from "../../contexts/products/ProductContext";

export const HomeView = () => {
  const { products, getProducts } = useContext(ProductContext);
  const [productsArr, setProductsArr] = useState([]);

  useEffect(() => {
    getProducts();
  }, []);

  useEffect(() => {
    setProductsArr(products);
  }, [products]);

  return (
    <Viewport>
      <Carousel />
      <Products productsArr={productsArr} setProductsArr={setProductsArr} />
    </Viewport>
  );
};
