import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./App.css";
import { BrowserRouter } from "react-router-dom";
import ProductsProvider from "./context/ProductsContext";
import CartProvider from "./context/CartContext";
import SidebarProvider from "./context/SidebarContext";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
    <SidebarProvider>
      <ProductsProvider>
        <CartProvider>
          <BrowserRouter>
            <App />
          </BrowserRouter>
        </CartProvider>
      </ProductsProvider>
    </SidebarProvider>
);
