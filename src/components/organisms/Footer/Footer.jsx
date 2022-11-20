import classes from "./footer.module.scss";

export const Footer = () => {
  return (
    <div className={classes.footer}>
      &copy; Todos los derechos reservados | Diseñado por{" "}
      <a href="https://www.linkedin.com/in/mirkoperamas/" target="_blank">
        mPearDev
      </a>
    </div>
  );
};
