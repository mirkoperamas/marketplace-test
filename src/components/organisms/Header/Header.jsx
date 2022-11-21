import { Content, Shop, Profile } from "../../";
import { Link } from "react-router-dom";
import classes from "./header.module.scss";

export const Header = () => {
  return (
    <header className={classes.header}>
      <Content>
        <div className={classes.header__main}>
          <div>
            <img src="/img/marketplace-total-logo.png" alt="market-logo" />
          </div>
          <div>
            <Shop />
            <Profile />
          </div>
        </div>
        <div className={classes.header__links}>
          <div>
            <Link to="/">home</Link>
            <Link to="/history">historial</Link>
          </div>
        </div>
      </Content>
    </header>
  );
};
