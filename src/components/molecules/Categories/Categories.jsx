import { useContext } from "react";
import classes from "./categories.module.scss";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";
import Divider from "@mui/material/Divider";
import { useCategories } from "../../../hooks/useCategories";
import ProductContext from "../../../contexts/products/ProductContext";

export const Categories = ({ getProductsByCategory, setProductsArr }) => {
  const { impCategoriesItems } = useCategories();
  const { products, loading } = useContext(ProductContext);

  return (
    <div className={classes.categories}>
      <div>
        <h3>Categorias</h3>
      </div>
      <div>
        <List>
          <div onClick={() => setProductsArr(products)}>
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
