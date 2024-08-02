import React, { useContext } from "react";
import { Button } from "./button.component";
import "../styles/product-card.styles.scss";
import { cartcontex } from "../contexApi/cart-contex";
import toast from "react-hot-toast";
export default function ProductCard({ item }) {
  const { addItemToCart } = useContext(cartcontex);
  const { name, price, imageUrl } = item;

  const handleAddToCart = () => {
    addItemToCart(item);
    toast.success("Added to cart");
  };
  return (
    <div className="product-card-container">
      <img src={imageUrl} alt={name} />
      <div className="footer">
        <span className="name">{name}</span>
        <span className="price">{price}</span>
      </div>
      <Button onClick={() => handleAddToCart()} buttontype="inverted">
        Add to cart
      </Button>
    </div>
  );
}
