import React from "react";
import ProductCard from "./productCard.component";

import "../styles/collection-preview.styles.scss";
import { Link } from "react-router-dom";
export const Collectionpreview = ({ title, product }) => {
  return (
    <div className="category-preview-container">
      <h2 className="title">
        <Link to={`/shop/${title}`}>
          <span>{title}</span>
        </Link>
      </h2>
      <div className="preview">
        {product
          .filter((_, idx) => idx < 4)
          .map((item) => {
            return <ProductCard product={item} />;
          })}
      </div>
    </div>
  );
};
