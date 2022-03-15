import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import LocalizationProvider from "@mui/lab/LocalizationProvider";
import AdapterDateFns from "@mui/lab/AdapterDateFns";

import { store } from "./store";
import { AppRoutes } from "./routes/AppRoutes";
import { MaterialThemeProvider } from "./context";

import "./index.css";

const app = (
  <Provider store={store}>
    <BrowserRouter>
      <LocalizationProvider dateAdapter={AdapterDateFns}>
        <MaterialThemeProvider>
          <AppRoutes />
        </MaterialThemeProvider>
      </LocalizationProvider>
    </BrowserRouter>
  </Provider>
);

ReactDOM.render(app, document.getElementById("root"));
