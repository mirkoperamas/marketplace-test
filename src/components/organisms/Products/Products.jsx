import { useEffect, useState } from "react";
import classes from "./products.module.scss";
import {
  Content,
  PaginationProducts,
  ListProducts,
  Categories,
  TitleHead,
} from "../../";
import { usePagination } from "../../../hooks/usePagination";

export const Products = ({
  productsDb,
  loading,
  productsArr,
  setProductsArr,
}) => {
  const [page, setPage] = useState(1);
  const [countCalc, setCountCalc] = useState(0);
  const paginate = 5;
  const count = Math.ceil(countCalc);
  const dataDb = usePagination(productsArr, paginate);

  const handleChange = (e, v) => {
    setPage(v);
    dataDb.jump(v);
  };

  useEffect(() => {
    if (productsDb != "") {
      setCountCalc(productsArr.length / paginate);
    }
  }, [productsArr]);

  const getProductsByCategory = (p) => {
    const arrFiltered = productsDb.filter(({ category }) => category === p);
    setProductsArr(arrFiltered);
    setPage(1);
    dataDb.jump(1);
  };

  return (
    <section className={classes.products}>
      <Content>
        <TitleHead
          title={"productos"}
          getProductsByCategory={getProductsByCategory}
          setProductsArr={setProductsArr}
        />
        <div>
          <Categories
            getProductsByCategory={getProductsByCategory}
            setProductsArr={setProductsArr}
          />

          <PaginationProducts
            productsDb={productsDb}
            page={page}
            count={count}
            handleChange={handleChange}
          />

          <ListProducts loading={loading} dataDb={dataDb} />
        </div>
      </Content>
    </section>
  );
};
