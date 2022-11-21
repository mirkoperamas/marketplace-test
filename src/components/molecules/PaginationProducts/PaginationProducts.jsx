import useBreakpoint from "../../../hooks/useBreakpoint";
import classes from "./pagination-products.module.scss";
import Pagination from "@mui/material/Pagination";

export const PaginationProducts = ({
  productsDb,
  page,
  count,
  handleChange,
}) => {
  const breakpoint = useBreakpoint();

  return (
    <div className={classes.pagination}>
      {productsDb != "" && (
        <Pagination
          count={count}
          color="error"
          page={page}
          size={breakpoint <= 576 ? "small" : ""}
          onChange={handleChange}
        />
      )}
    </div>
  );
};
