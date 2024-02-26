import axios from "axios";
// const { createContext, useEffect, useState } = require("react");
import React, { createContext, useEffect, useState } from "react";

export const ProductsContext = createContext();

const ProductsProvider = ({ children }) => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    axios.get("https://fakestoreapi.com/products").then((p) => {
        setProducts(p.data);
      })
      .catch((error) => {
        console.log(error);
      });
  },[]);
  return (
    <ProductsContext.Provider
      value={{products}}>
      {children}
    </ProductsContext.Provider>
  );
};
export default ProductsProvider;
