import { useState } from "react";
import { MainContainer, Shop, Profile } from "../../";
import classes from "./header.module.scss";

export const Header = () => {
  return (
    <header className={classes.header}>
      <MainContainer>
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
            <a>home</a>
            <a>historial</a>
          </div>
        </div>
      </MainContainer>
    </header>
  );
};
