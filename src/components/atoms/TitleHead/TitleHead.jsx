import useBreakpoint from "../../../hooks/useBreakpoint";
import { CategoriesMobile } from "../../";
import classes from "./title-head.module.scss";
import { useLocation } from "react-router-dom";

export const TitleHead = ({
  getProductsByCategory = () => false,
  setProductsArr = [],
  title = "title",
}) => {
  const breakpoint = useBreakpoint();
  const location = useLocation();

  return (
    <div className={classes.head}>
      <h2>{title}</h2>
      {location.pathname == "/" && breakpoint <= 576 && (
        <CategoriesMobile
          getProductsByCategory={getProductsByCategory}
          setProductsArr={setProductsArr}
        />
      )}
    </div>
  );
};
