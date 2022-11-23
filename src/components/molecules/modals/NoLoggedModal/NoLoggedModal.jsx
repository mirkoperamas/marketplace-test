import classes from "./no-logged-modal.module.scss";
import Dialog from "@mui/material/Dialog";
import DialogContent from "@mui/material/DialogContent";
import DialogActions from "@mui/material/DialogActions";
import Button from "@mui/material/Button";
import { useContext } from "react";
import AuthContext from "../../../../contexts/auth/AuthContext";

export const NoLoggedModal = (props) => {
  const { login } = useContext(AuthContext);

  const { onClose, open } = props;

  const handleClose = () => {
    onClose();
  };

  return (
    <Dialog
      onClose={handleClose}
      open={open}
      sx={{
        "& .MuiDialog-paper": { width: "80%", height: "50vh", maxHeight: 300 },
      }}
      maxWidth="xs"
    >
      <DialogContent>
        <div className={classes.logged}>
          <h3>
            Debe ingresar con un correo de Google para agregar productos al
            carrito y efectuar una compra
          </h3>
          <div>
            <Button
              onClick={() => {
                login();
                handleClose();
              }}
              color="success"
              variant="outlined"
            >
              Ingresar con Google
            </Button>
            <Button onClick={handleClose} color="error" variant="contained">
              Cerrar
            </Button>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};
