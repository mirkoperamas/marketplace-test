import classes from "./shop-modal.module.scss";
import Dialog from "@mui/material/Dialog";
import DialogTitle from "@mui/material/DialogTitle";
import DialogContent from "@mui/material/DialogContent";
import DialogActions from "@mui/material/DialogActions";
import Button from "@mui/material/Button";
import ListItem from "@mui/material/ListItem";
import Divider from "@mui/material/Divider";
import AddIcon from "@mui/icons-material/Add";
import IconButton from "@mui/material/IconButton";
import RemoveIcon from "@mui/icons-material/Remove";

export const ShopModal = (props) => {
  const {
    onClose,
    open,
    cartItems,
    total,
    breakpoint,
    addItemToCart,
    deleteItemToCart,
    productsLength,
  } = props;

  const handleClose = () => {
    onClose();
  };

  const money = new Intl.NumberFormat("es-PE", {
    style: "currency",
    currency: "PER",
  });

  return (
    <Dialog
      onClose={handleClose}
      open={open}
      sx={{
        "& .MuiDialog-paper": { width: "80%", height: "80vh", maxHeight: 800 },
      }}
      maxWidth="xxl"
    >
      <DialogTitle sx={{ textTransform: "uppercase" }}>
        Carrito de compras
      </DialogTitle>

      {productsLength == 0 && <div className={classes.shop__default}></div>}

      <DialogContent>
        {cartItems.map((item, index) => {
          return (
            <div key={index}>
              <div className={classes.shop__item}>
                <div className={classes.shop__itemImg}>
                  <img alt={`image-${item.id}`} src={item.image} />
                </div>
                <ListItem>
                  <div className={classes.shop__itemDescription}>
                    <div className={classes.shop__itemTitle}>
                      <h2>{item.name}</h2>
                      <p>{item.brand}</p>
                    </div>

                    <div className={classes.shop__itemContent}>
                      <div>
                        <h3>Cantidad</h3>
                        <div>
                          <IconButton
                            size="small"
                            onClick={() => deleteItemToCart(item)}
                          >
                            <RemoveIcon />
                          </IconButton>
                          <p>{item.amount}</p>
                          <IconButton
                            size="small"
                            onClick={() => addItemToCart(item)}
                          >
                            <AddIcon />
                          </IconButton>
                        </div>
                      </div>

                      <div>
                        <h3>Precio</h3>
                        <div>
                          <p>{money.format(item.price)}</p>
                        </div>
                      </div>

                      <div>
                        <h3>Total</h3>
                        <div>
                          <span>{money.format(item.amount * item.price)}</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </ListItem>
              </div>
              <Divider />
            </div>
          );
        })}
      </DialogContent>

      <DialogActions sx={{ background: "#f2f2f2" }}>
        <div className={classes.shop__itemPanel}>
          {productsLength != 0 && (
            <div>
              <p>Costo Total:</p>
              <h3>{money.format(total)}</h3>
            </div>
          )}
          <div>
            {productsLength != 0 && (
              <Button
                color="success"
                variant="outlined"
                size={breakpoint <= 576 ? "small" : "medium"}
              >
                Realizar compra
              </Button>
            )}
            <Button onClick={handleClose} color="error" variant="contained">
              Cerrar
            </Button>
          </div>
        </div>
      </DialogActions>
    </Dialog>
  );
};
