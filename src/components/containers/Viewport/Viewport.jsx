import classes from "./viewport.module.scss";

export const Viewport = ({ children }) => {
  return <div className={classes.viewport}>{children}</div>;
};
