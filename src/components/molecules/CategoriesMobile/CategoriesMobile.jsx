import { useState } from "react";
import classes from "./categories-mobile.module.scss";
import MenuIcon from "@mui/icons-material/Menu";
import IconButton from "@mui/material/IconButton";
import Menu from "@mui/material/Menu";
import Divider from "@mui/material/Divider";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";
import { useCategories } from "../../../hooks/useCategories";
import { useProducts } from "../../../hooks/useProducts";

export const CategoriesMobile = ({ getProductsByCategory, setProductsArr }) => {
  const { productsDb, loading } = useProducts();
  const { impCategoriesItems } = useCategories();

  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  return (
    <>
      <div className={classes.categories}>
        <IconButton
          id="categories-button"
          aria-controls={open ? "categories" : undefined}
          aria-expanded={open ? "true" : undefined}
          aria-haspopup="true"
          onClick={handleClick}
        >
          <MenuIcon />
        </IconButton>
      </div>

      <Menu
        id="categories"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        MenuListProps={{
          "aria-labelledby": "categories-button",
        }}
      >
        <div className={classes.categories__menu}>
          <ListItem disablePadding>
            <ListItemButton
              onClick={() => {
                setProductsArr(productsDb);
                handleClose();
              }}
            >
              <ListItemText primary="todos" />
            </ListItemButton>
          </ListItem>
          <Divider />
          {loading == false && <p>Loading...</p>}
          {impCategoriesItems.map((category, index) => {
            return (
              <div key={index}>
                <ListItem disablePadding>
                  <ListItemButton
                    onClick={() => {
                      getProductsByCategory(category);
                      handleClose();
                    }}
                  >
                    <ListItemText primary={category} />
                  </ListItemButton>
                </ListItem>
                <Divider />
              </div>
            );
          })}
        </div>
      </Menu>
    </>
  );
};
