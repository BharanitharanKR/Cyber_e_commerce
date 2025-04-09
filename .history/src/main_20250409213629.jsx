// src/App.js or index.js
import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { CartProvider } from "/context/CartContext";

ReactDOM.render(
  <CartProvider>
    <App />
  </CartProvider>,
  document.getElementById("root")
);
