import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";


import { Provider } from "react-redux";
import store from "./redux/reducers/IndexReducer"; 
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter } from "react-router-dom";
import App from "./App";
// import ScrollToTop from "./constants/ScrollToTop";
 
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Provider store={store}>
          {/* <ScrollToTop /> */}
        <App />
      </Provider>
    </BrowserRouter>
  </React.StrictMode>
);
