import { Box } from "@lab/styleguide";
import { Avatar } from "@lab/styleguide";
import { Menu } from "@lab/styleguide";
import { MenuItem } from "@lab/styleguide";
import { ListItemIcon } from "@lab/styleguide";
import image from "../../assets/images/2.jpg";
import { IconButton, KeyboardArrowDownOutlined, Chip } from "@lab/styleguide";
import { Divider } from "@lab/styleguide";
import { PersonAdd } from "@lab/styleguide";
import { Settings } from "@lab/styleguide";
import { Logout } from "@lab/styleguide";
import { Fragment, useState } from "react";
import { useDispatch } from "react-redux";
import { clearLocalStorage } from "../../utilities";
import { navigateToUrl } from "single-spa";
import { resetUser, UserKey } from "@lab/state";

export default function AccountMenu() {
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);
  const handleClick = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  const dispatch = useDispatch();
  const logOut = () => {
    clearLocalStorage(UserKey);
    dispatch(resetUser());
    navigateToUrl('/auth')
  //   navigate('/auth', { replace: true });
  };

  return (
    <>
      <IconButton onClick={handleClick} sx={{ bgcolor: 'background.paper',  boxShadow: 1, borderRadius: 3, py:0.5, px: 1.5}}  variant="filledTonal" >
        <Avatar alt="Configuración" src={image} size="sm" />
        <KeyboardArrowDownOutlined />
      </IconButton>

      <Menu
        anchorEl={anchorEl}
        id="account-menu"
        open={open}
        onClose={handleClose}
        onClick={handleClose}
        PaperProps={{
          elevation: 0,
          sx: {
            overflow: "visible",
            filter: "drop-shadow(0px 2px 8px rgba(0,0,0,0.32))",
            "&:before": {
              content: '""',
              display: "block",
              position: "absolute",
              top: 0,
              right: 14,
              width: 10,
              height: 10,
              bgcolor: "background.paper",
              transform: "translateY(-50%) rotate(45deg)",
              zIndex: 0,
            },
          },
        }}
        transformOrigin={{ horizontal: "right", vertical: "top" }}
        anchorOrigin={{ horizontal: "right", vertical: "bottom" }}
      >
        <MenuItem onClick={handleClose}>
          <ListItemIcon>
            <PersonAdd />
          </ListItemIcon>
          Perfil
        </MenuItem>
        <MenuItem onClick={handleClose}>
          <ListItemIcon>
            <Settings />
          </ListItemIcon>
          Cuenta
        </MenuItem>

        <MenuItem onClick={handleClose}>
          <ListItemIcon>
            <Settings />
          </ListItemIcon>
          Cambio de clave
        </MenuItem>
        <Divider variant="middle" />
        <MenuItem onClick={logOut}>
          <ListItemIcon>
            <Logout />
          </ListItemIcon>
          Cerrar sesión
        </MenuItem>
      </Menu>
    </>
  );
}
