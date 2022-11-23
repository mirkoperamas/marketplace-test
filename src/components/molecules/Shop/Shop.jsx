import { useContext, useEffect, useState } from "react";
import IconButton from "@mui/material/IconButton";
import Badge from "@mui/material/Badge";
import LocalGroceryStoreIcon from "@mui/icons-material/LocalGroceryStore";
import useBreakpoint from "../../../hooks/useBreakpoint";
import classes from "./shop.module.scss";
import CartContext from "../../../contexts/cart/CartContext";
import AuthContext from "../../../contexts/auth/AuthContext";
import { ShopModal } from "../modals/ShopModal/ShopModal";
import { NoLoggedModal } from "../modals/NoLoggedModal/NoLoggedModal";

export const Shop = () => {
  const breakpoint = useBreakpoint();
  const [productsLength, setProductsLength] = useState(0);

  const { getAccount } = useContext(AuthContext);

  const { cartItems, deleteItemToCart, addItemToCart } =
    useContext(CartContext);

  useEffect(() => {
    setProductsLength(
      cartItems.reduce((previous, current) => previous + current.amount, 0)
    );
  }, [cartItems]);

  const total = cartItems.reduce(
    (previous, current) => previous + current.amount * current.price,
    0
  );

  const [open, setOpen] = useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <>
      <div className={classes.shop}>
        <IconButton onClick={handleClickOpen}>
          <Badge
            badgeContent={productsLength}
            color="error"
            variant={breakpoint <= 576 ? "dot" : ""}
          >
            <LocalGroceryStoreIcon />
          </Badge>
        </IconButton>
      </div>

      {!getAccount && <NoLoggedModal open={open} onClose={handleClose} />}

      {getAccount && (
        <ShopModal
          open={open}
          onClose={handleClose}
          cartItems={cartItems}
          total={total}
          breakpoint={breakpoint}
          addItemToCart={addItemToCart}
          deleteItemToCart={deleteItemToCart}
          productsLength={productsLength}
        />
      )}
    </>
  );
};
