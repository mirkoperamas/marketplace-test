import { useEffect, useState } from "react";
import { Carousel, Products, Viewport } from "../";
import { useProducts } from "../../hooks/useProducts";

export const HomeView = () => {
  const { productsDb, loading } = useProducts();

  const [productsArr, setProductsArr] = useState([]);

  useEffect(() => {
    if (productsArr == "") {
      setProductsArr(productsDb);
    }
  }, [productsDb]);

  return (
    <Viewport>
      <Carousel />
      <Products
        productsDb={productsDb}
        loading={loading}
        productsArr={productsArr}
        setProductsArr={setProductsArr}
      />
    </Viewport>
  );
};
