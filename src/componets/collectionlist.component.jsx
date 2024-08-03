import React, { useContext } from "react";
import { productcontext } from "../contexApi/collection.contex";
import "../styles/products-card.styles.scss";
import { Collectionpreview } from "./collectionpreview";

export const Collectionlist = () => {
  // REENDER THE DIFFERENT COLLECTION IN THE SHOP PAGE
  const { collection } = useContext(productcontext);
  return (
    <>
      {collection &&
        Object.keys(collection).map((title) => {
          const products = collection[title];
          return (
            <Collectionpreview key={title} title={title} product={products} />
          );
        })}
    </>
  );
};
