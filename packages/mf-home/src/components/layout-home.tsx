import { Outlet } from "react-router-dom";
import TabsHome from "./tabs";
import { Paper } from "@lab/styleguide";

function LayoutHome() {
  return (
    <>
      <Paper sx={{ my: 2, p: 2 }}>
        <TabsHome></TabsHome>
        <Outlet />
      </Paper>
    </>
  );
}
export default LayoutHome;
