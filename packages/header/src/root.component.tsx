import { useEffect, useState } from "react";
import store from "@lab/state";
import Logout from "./components/logout/logout";
import { Provider } from "react-redux";
import { redux } from "@lab/state";

import { Button } from "@lab/styleguide";
import { CancelOutlined } from "@lab/styleguide";
import { ResponsiveAppBar } from "./components";


export default function Root() {


  return (
    <Provider store={redux}>
      <ResponsiveAppBar/>
    </Provider>
  );
}
