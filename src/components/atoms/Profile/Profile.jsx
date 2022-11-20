import { useState } from "react";
import Avatar from "@mui/material/Avatar";
import Tooltip from "@mui/material/Tooltip";
import MenuItem from "@mui/material/MenuItem";
import Menu from "@mui/material/Menu";
import ListItemIcon from "@mui/material/ListItemIcon";
import Logout from "@mui/icons-material/Logout";
import useBreakpoint from "../../../hooks/useBreakpoint";
import classes from "./profile.module.scss";

export const Profile = () => {
  const [isLog, setIsLog] = useState(true);
  const breakpoint = useBreakpoint();
  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <>
      {!isLog && <a>Iniciar Sección</a>}
      {isLog && (
        <div className={classes.profile}>
          <Tooltip title="cuenta">
            <div onClick={handleClick}>
              <Avatar
                alt="profile"
                src="https://media.istockphoto.com/id/1309328823/photo/headshot-portrait-of-smiling-male-employee-in-office.jpg?s=612x612&w=0&k=20&c=kPvoBm6qCYzQXMAn9JUtqLREXe9-PlZyMl9i-ibaVuY="
                sx={{
                  width: breakpoint <= 576 ? 25 : 35,
                  height: breakpoint <= 576 ? 25 : 35,
                }}
              />
              <div>
                <h5>Mirko Peramas</h5>
                <small>mirko@gmail.com</small>
              </div>
            </div>
          </Tooltip>

          <Menu
            id="profile"
            anchorEl={anchorEl}
            open={open}
            onClose={handleClose}
            MenuListProps={{
              "aria-labelledby": "button",
            }}
          >
            <MenuItem onClick={handleClose}>
              <ListItemIcon>
                <Logout fontSize="small" />
              </ListItemIcon>
              Cerrar Sesion
            </MenuItem>
          </Menu>
        </div>
      )}
    </>
  );
};
