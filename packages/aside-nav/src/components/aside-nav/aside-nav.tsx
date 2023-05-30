import { Paper } from "@lab/styleguide";
import { MenuList } from "@lab/styleguide";
import { MenuItem } from "@lab/styleguide";
import { ListItemText } from "@lab/styleguide";
import { ListItemIcon } from "@lab/styleguide";
import { navigateToUrl } from "single-spa";
import { items } from "./items.constant";

function AsideNav() {
  const handleChange = (path: string) => {
    navigateToUrl(path);
  };

  return (
    <Paper
      sx={{
        width: 320,
        maxWidth: "100%",
        mt: 2,
        background: () => `linear-gradient(to top, #054DA7, #096BDE)`,
      }}
    >
      <MenuList sx={{ p: 0}}>
        {items.map((item) => {
          return (
            <MenuItem
              key={item.label}
              onClick={() => handleChange(item.path)}
              divider={true}
              sx={{ color: "#e8eaf6"}}
            >
              <ListItemIcon>{item.icon}</ListItemIcon>
              <ListItemText>{item.label}</ListItemText>
            </MenuItem>
          );
        })}
      </MenuList>
    </Paper>
  );
}
export default AsideNav;
