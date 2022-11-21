import IconButton from "@mui/material/IconButton";
import Badge from "@mui/material/Badge";
import LocalGroceryStoreIcon from "@mui/icons-material/LocalGroceryStore";
import useBreakpoint from "../../../hooks/useBreakpoint";
import classes from "./shop.module.scss";

export const Shop = () => {
  const breakpoint = useBreakpoint();

  return (
    <div className={classes.shop}>
      <IconButton>
        <Badge
          badgeContent={1}
          color="error"
          variant={breakpoint <= 576 ? "dot" : ""}
        >
          <LocalGroceryStoreIcon />
        </Badge>
      </IconButton>
    </div>
  );
};
