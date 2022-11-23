import { useContext, useState } from "react";
import classes from "./list-products.module.scss";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import { useNavigate } from "react-router-dom";
import ProductContext from "../../../contexts/products/ProductContext";
import Button from "@mui/material/Button";
import useBreakpoint from "../../../hooks/useBreakpoint";
import CartContext from "../../../contexts/cart/CartContext";
import AuthContext from "../../../contexts/auth/AuthContext";
import { NoLoggedModal } from "../modals/NoLoggedModal/NoLoggedModal";

export const ListProducts = ({ dataDb }) => {
  const navigate = useNavigate();
  const breakpoint = useBreakpoint();
  const { loading } = useContext(ProductContext);

  const { getAccount } = useContext(AuthContext);

  const { addItemToCart } = useContext(CartContext);

  const money = new Intl.NumberFormat("es-PE", {
    style: "currency",
    currency: "PER",
  });

  const [open, setOpen] = useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const clickedProduct = (p) => {
    if (!getAccount) {
      handleClickOpen();
    }
    if (getAccount) {
      addItemToCart(p);
    }
  };

  const discountCalc = (number, discount) => {
    const calc = number - (number * discount) / 100;
    return calc;
  };

  return (
    <div className={classes.list}>
      {loading == false && <p>Loading...</p>}

      {dataDb.currentData().map((item) => {
        return (
          <Card
            key={item.id}
            onClick={() => {
              clickedProduct(item);
            }}
          >
            <div>
              <CardMedia
                component="img"
                image={item.image}
                alt={`image-${item.id}`}
              />
              <div
                style={{
                  padding: "2rem 0",
                  position: "absolute",
                  bottom: "0",
                }}
              >
                <Button
                  variant="contained"
                  size={breakpoint <= 576 ? "small" : "medium"}
                  color="error"
                >
                  {breakpoint <= 576 ? "Agregar" : "Agregar al carrito"}
                </Button>
              </div>
            </div>
            <CardContent>
              <h5>{item.brand}</h5>
              <h1>{item.name}</h1>

              {item.discount > 0 && (
                <div className={classes.list__price}>
                  <p>{money.format(discountCalc(item.price, item.discount))}</p>
                  <span>{money.format(item.price)}</span>
                  <div>{`-${item.discount}%`}</div>
                </div>
              )}

              {item.discount == 0 && (
                <div className={classes.list__price}>
                  <p>{money.format(item.price)}</p>
                </div>
              )}
            </CardContent>
          </Card>
        );
      })}

      {!getAccount && <NoLoggedModal open={open} onClose={handleClose} />}
    </div>
  );
};
