import { useContext } from "react";
import classes from "./list-products.module.scss";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import { useNavigate } from "react-router-dom";
import ProductContext from "../../../contexts/products/ProductContext";
import Button from "@mui/material/Button";
import useBreakpoint from "../../../hooks/useBreakpoint";

export const ListProducts = ({ dataDb }) => {
  const navigate = useNavigate();
  const breakpoint = useBreakpoint();
  const { loading } = useContext(ProductContext);

  const money = new Intl.NumberFormat("es-PE", {
    style: "currency",
    currency: "PER",
  });

  const discountCalc = (number, discount) => {
    const calc = number - (number * discount) / 100;
    return calc;
  };

  return (
    <div className={classes.list}>
      {loading == false && <p>Loading...</p>}
      {dataDb
        .currentData()
        .map(({ id, brand, name, image, price, discount }) => {
          return (
            <Card
              key={id}
              onClick={() => {
                console.log(id);
              }}
            >
              <div>
                <CardMedia component="img" image={image} alt={`image-${id}`} />
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
                <h5>{brand}</h5>
                <h1>{name}</h1>

                {discount > 0 && (
                  <div className={classes.list__price}>
                    <p>{money.format(discountCalc(price, discount))}</p>
                    <span>{money.format(price)}</span>
                    <div>{`-${discount}%`}</div>
                  </div>
                )}

                {discount == 0 && (
                  <div className={classes.list__price}>
                    <p>{money.format(price)}</p>
                  </div>
                )}
              </CardContent>
            </Card>
          );
        })}
    </div>
  );
};
