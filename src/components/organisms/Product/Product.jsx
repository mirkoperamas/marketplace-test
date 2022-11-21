import { TitleHead, Content } from "../../";
import { useProducts } from "../../../hooks/useProducts";
import classes from "./product.module.scss";

export const Product = () => {
  // const { productsDb } = useProducts();

  // const getProductById = (p) => {
  //   if(productsDb != ""){
  //     const arrFiltered = productsDb.filter(({ id }) => id === p);
  //     setProductsArr(arrFiltered);
  //   }
  // };

  useEffect(() => {}, []);

  return (
    <section className={classes.product}>
      <Content>
        <TitleHead title={"product"} />
      </Content>
    </section>
  );
};
