import { useState } from "react";
import { Box } from "@lab/styleguide";
import { Tabs } from "@lab/styleguide";
import { Tab } from "@lab/styleguide";


import { PrivateRoutes } from "../constants";
import { useNavigate } from "react-router-dom";
function TabsHome() {
  const [value, setValue] = useState(PrivateRoutes.ROUTES.HOME);
  const navigate = useNavigate();
  const handleChange = (event: React.SyntheticEvent, newValue: string) => {
    setValue(newValue);
    navigate(newValue, { replace: true });
  };

  return (

    <Box sx={{ width: "100%" }}>
      <Tabs
        value={value}
        onChange={handleChange}
        textColor="secondary"
        indicatorColor="secondary"
      >
        <Tab value={PrivateRoutes.ROUTES.HOME} label="Home" />
        <Tab value={PrivateRoutes.LINK.TAB_UNO} label="Item One" />
        <Tab value={PrivateRoutes.LINK.TAB_DOS} label="Item Two" />
        <Tab value={PrivateRoutes.LINK.TAB_TRES} label="Item Three" />
      </Tabs>
    </Box>

  );
}
export default TabsHome;
