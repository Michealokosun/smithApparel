import React, { useContext } from "react";
import { productcontext } from "../contexApi/product.contex";
import "../styles/products-card.styles.scss";
import ProductCard from "./productCard.component";

export const Productlist = () => {
  const { product } = useContext(productcontext);
  return (
    <div className="products-container">
      {product &&
        product.map((item) => <ProductCard key={item.id} item={item} />)}
      ;
    </div>
  );
};
