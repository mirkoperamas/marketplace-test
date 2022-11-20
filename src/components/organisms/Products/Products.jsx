import classes from "./products.module.scss";
import { MainContainer } from "../../";
import categories from "../../../utils/data/categories.json";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";
import Divider from "@mui/material/Divider";
import Pagination from "@mui/material/Pagination";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";

import products from "../../../utils/data/products.json";

import { usePagination } from "../../../hooks/usePagination";
import { useState } from "react";
import useBreakpoint from "../../../hooks/useBreakpoint";

import MenuIcon from "@mui/icons-material/Menu";

import IconButton from "@mui/material/IconButton";

import MenuItem from "@mui/material/MenuItem";
import Menu from "@mui/material/Menu";
import ListItemIcon from "@mui/material/ListItemIcon";

export const Products = () => {
  const [page, setPage] = useState(1);

  const breakpoint = useBreakpoint();

  const PAGINATION = 5;
  const count = Math.ceil(products.length / PAGINATION);
  const DATA = usePagination(products, PAGINATION);

  const handleChange = (e, p) => {
    setPage(p);
    DATA.jump(p);
  };

  const money = new Intl.NumberFormat("es-PE", {
    style: "currency",
    currency: "PER",
  });

  const discountCalc = (number, discount) => {
    const calc = number - (number * discount) / 100;
    return calc;
  };

  return (
    <section className={classes.products}>
      <MainContainer>
        <div className={classes.products__head}>
          <h2 className={classes.products__title}>Productos</h2>
          {breakpoint <= 576 && <CategoriesMobile />}
        </div>
        <div>
          <div className={classes.products__categories}>
            <div>
              <h3>Categorias</h3>
            </div>
            <div>
              <List>
                <ListItem disablePadding>
                  <ListItemButton>
                    <ListItemText primary="todos" />
                  </ListItemButton>
                </ListItem>
                <Divider />
                {categories.map((category) => {
                  return (
                    <div key={category.id}>
                      <ListItem disablePadding>
                        <ListItemButton>
                          <ListItemText primary={category.name} />
                        </ListItemButton>
                      </ListItem>
                      <Divider />
                    </div>
                  );
                })}
              </List>
            </div>
          </div>

          <PaginationProducts
            count={count}
            page={page}
            handleChange={handleChange}
          />

          <div className={classes.products__list}>
            {DATA.currentData().map(
              ({ id, category, brand, name, image, price, discount }) => {
                return (
                  <Card key={id}>
                    <div>
                      <CardMedia
                        component="img"
                        image={image}
                        alt={`image-${id}`}
                      />
                    </div>
                    <CardContent>
                      <h5>{brand}</h5>
                      <h1>{name}</h1>

                      {discount > 0 && (
                        <div className={classes.products__listPrice}>
                          <p>{money.format(discountCalc(price, discount))}</p>
                          <span>{money.format(price)}</span>
                          <div>{`-${discount}%`}</div>
                        </div>
                      )}

                      {discount == 0 && (
                        <div className={classes.products__listPrice}>
                          <p>{money.format(price)}</p>
                        </div>
                      )}
                    </CardContent>
                  </Card>
                );
              }
            )}
          </div>
        </div>
      </MainContainer>
    </section>
  );
};

const PaginationProducts = ({ count, page, handleChange }) => {
  const breakpoint = useBreakpoint();

  return (
    <div className={classes.products__pagination}>
      <Pagination
        count={count}
        color="error"
        page={page}
        size={breakpoint <= 576 ? "small" : ""}
        onChange={handleChange}
      />
    </div>
  );
};

const CategoriesMobile = () => {
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
      <div className={classes.categoriesm}>
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
        {}
        {categories.map((category) => {
          return (
            <div key={category.id}>
              <ListItem disablePadding>
                <ListItemButton onClick={handleClose}>
                  <ListItemText primary={category.name} />
                </ListItemButton>
              </ListItem>
              <Divider />
            </div>
          );
        })}
      </Menu>
    </>
  );
};
