import { useContext, useEffect, useState } from "react";
import Avatar from "@mui/material/Avatar";
import Tooltip from "@mui/material/Tooltip";
import MenuItem from "@mui/material/MenuItem";
import Menu from "@mui/material/Menu";
import ListItemIcon from "@mui/material/ListItemIcon";
import Logout from "@mui/icons-material/Logout";
import useBreakpoint from "../../../hooks/useBreakpoint";
import classes from "./profile.module.scss";
import AuthContext from "../../../contexts/auth/AuthContext";

export const Profile = () => {
  const { login, logout, getAccount } = useContext(AuthContext);

  const breakpoint = useBreakpoint();

  const [anchorToLogMenu, setAnchorToLogMenu] = useState(null);
  const open = Boolean(anchorToLogMenu);
  const handleClickMenu = (event) => {
    setAnchorToLogMenu(event.currentTarget);
  };
  const handleCloseMenu = () => {
    setAnchorToLogMenu(null);
  };

  return (
    <>
      {!getAccount && <a onClick={() => login()}>Ingresar con Google</a>}

      {getAccount && (
        <div className={classes.profile}>
          <Tooltip title="cuenta">
            <div onClick={handleClickMenu}>
              <Avatar
                alt="profile"
                src={getAccount?.profilePic}
                referrerPolicy="no-referrer"
                sx={{
                  width: breakpoint <= 576 ? 25 : 35,
                  height: breakpoint <= 576 ? 25 : 35,
                }}
              />
              <div>
                <h5>{getAccount?.displayName}</h5>
                <small>{getAccount?.email}</small>
              </div>
            </div>
          </Tooltip>

          <Menu
            id="profile"
            anchorEl={anchorToLogMenu}
            open={open}
            onClose={handleCloseMenu}
            MenuListProps={{
              "aria-labelledby": "button",
            }}
          >
            <MenuItem
              onClick={() => {
                logout();
                handleCloseMenu();
              }}
            >
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
