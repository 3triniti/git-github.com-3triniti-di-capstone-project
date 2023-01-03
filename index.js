import React from "react";
import { createRoot } from "react-dom/client";
import { Provider } from "react-redux";
import { store } from "./app/store";
// import { render } from "react-dom";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import App from "./App";
import "./index.css";
import { Carousel } from "react-responsive-carousel";

const container = document.getElementById("root");
const root = createRoot(container);

root.render(
  <React.StrictMode>
    <Provider store={store}>
      <Carousel>
        <App />
      </Carousel>
    </Provider>
  </React.StrictMode>
);
