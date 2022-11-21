import classes from "./list-products.module.scss";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import { useNavigate } from "react-router-dom";

export const ListProducts = ({ loading, dataDb }) => {
  const navigate = useNavigate();

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
        .map(({ id, category, brand, name, image, price, discount }) => {
          return (
            <Card key={id} onClick={() => navigate(`/${id}`)}>
              <div>
                <CardMedia component="img" image={image} alt={`image-${id}`} />
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
