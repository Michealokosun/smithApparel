import { createContext, useEffect, useState } from "react";
import shopdata from "../shop-data.json";
export const productcontext = createContext({
  product: null,
});

export const ProductProvider = ({ children }) => {
  const [product, setproduct] = useState(null);
  useEffect(() => {
    setproduct(shopdata);
  }, []);
  const value = {
    product,
    setproduct,
  };
  return (
    <productcontext.Provider value={value}>{children}</productcontext.Provider>
  );
};
