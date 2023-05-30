import { BrowserRouter } from "react-router-dom";
import AppRouter from "./routes/app.router";
import { redux } from "@lab/state";
import { Provider } from "react-redux";

export default function Root() {
  return (
    <Provider store={redux}>
      <BrowserRouter>
        <AppRouter />
      </BrowserRouter>
    </Provider>
  );
}
