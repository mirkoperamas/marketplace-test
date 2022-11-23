import classes from "./history.module.scss";
import { Content, TitleHead } from "../../";

// import {db} from "../../../config/firebase";
import { useContext } from "react";
import AuthContext from "../../../contexts/auth/AuthContext";

export const History = () => {
  /* EN PROCESO: Listado de productos personalizado por usuario */

  // const {getAccount} = useContext(AuthContext);
  // const productsCollection = collection(db, getAccount.email);

  return (
    <section className={classes.history}>
      <Content>
        <TitleHead title={"historial"} />
        <div className={classes.history__default}></div>
      </Content>
    </section>
  );
};
