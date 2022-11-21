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
      <ContentBg>
        <Products
          productsDb={productsDb}
          loading={loading}
          productsArr={productsArr}
          setProductsArr={setProductsArr}
        />
      </ContentBg>
    </Viewport>
  );
};

const ContentBg = ({ children }) => {
  return <div style={{ background: "#f2f2f2" }}>{children}</div>;
};
