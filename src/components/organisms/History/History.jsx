import classes from "./history.module.scss";
import { Content, TitleHead } from "../../";

export const History = () => {
  return (
    <section className={classes.history}>
      <Content>
        <TitleHead title={"historial"} />
      </Content>
    </section>
  );
};
