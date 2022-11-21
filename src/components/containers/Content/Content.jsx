import classes from "./content.module.scss";

export const Content = ({ children }) => {
  return <div className={classes.content}>{children}</div>;
};
