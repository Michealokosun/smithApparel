import React, { useContext, useEffect, useState } from "react";
import "../../styles/singlecollection.scss";
import { useParams } from "react-router-dom";
import { productcontext } from "../../contexApi/collection.contex";
import ProductCard from "../../componets/productCard.component";
export const SingleCollection = () => {
  const { collection } = useContext(productcontext);

  const { collectionName } = useParams();
  const [singleproduct, setsingleproduct] = useState([]);
  const [loading, setloading] = useState(true);
  useEffect(() => {
    setsingleproduct(collection[collectionName]);
    setloading(false);
  }, [collectionName, collection]);

  return (
    <div className="singlecollection-container">
      <h1 className="collection-title">{collectionName}</h1>
      <div className="product-container">
        {loading ? (
          <h4>Fetching Product....</h4>
        ) : (
          singleproduct &&
          singleproduct.map((item) => <ProductCard product={item} />)
        )}
      </div>
    </div>
  );
};
