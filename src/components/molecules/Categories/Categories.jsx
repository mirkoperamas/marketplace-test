import { useEffect, useState } from "react";
import classes from "./categories.module.scss";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";
import Divider from "@mui/material/Divider";
import { useProducts } from "../../../hooks/useProducts";
import { useCategories } from "../../../hooks/useCategories";

export const Categories = ({ getProductsByCategory, setProductsArr }) => {
  const { productsDb, loading } = useProducts();
  const { impCategoriesItems } = useCategories();

  return (
    <div className={classes.categories}>
      <div>
        <h3>Categorias</h3>
      </div>
      <div>
        <List>
          <div onClick={() => setProductsArr(productsDb)}>
            <ListItem disablePadding>
              <ListItemButton>
                <ListItemText primary="todos" />
              </ListItemButton>
            </ListItem>
          </div>
          <Divider />
          {loading == false && <p>Loading...</p>}

          {impCategoriesItems.map((category, index) => {
            return (
              <div key={index} onClick={() => getProductsByCategory(category)}>
                <ListItem disablePadding>
                  <ListItemButton>
                    <ListItemText primary={category} />
                  </ListItemButton>
                </ListItem>
                <Divider />
              </div>
            );
          })}
        </List>
      </div>
    </div>
  );
};
