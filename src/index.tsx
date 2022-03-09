import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import { store } from "./store";
import { AppRoutes } from "./routes/AppRoutes";
import "./index.css";

const app = (
  <Provider store={store}>
    <BrowserRouter>
      <AppRoutes />
    </BrowserRouter>
  </Provider>
);

ReactDOM.render(app, document.getElementById("root"));
