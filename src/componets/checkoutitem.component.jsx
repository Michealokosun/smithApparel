import React, { useContext } from "react";
import "../styles/checkout-item.styles.scss";
import {
  ChevronLeftIcon,
  ChevronRightIcon,
  TrashIcon,
} from "@heroicons/react/24/solid";
import { cartcontex } from "../contexApi/cart-contex";
export const Checkoutitem = ({ item }) => {
  const { addItemToCart, removeinCart, reducefromCart } =
    useContext(cartcontex);
  return (
    <div className="checkout-item-container">
      <div className="image-container">
        <img src={item.imageUrl} alt="" />
      </div>
      <div className="name">{item.name}</div>
      <div className="quantity">
        <ChevronLeftIcon onClick={() => reducefromCart(item)} width={20} />
        <p>{item.qnty}</p>
        <ChevronRightIcon onClick={() => addItemToCart(item)} width={20} />
      </div>
      <div className="price">
        <p>{item.price}</p>
      </div>
      <div onClick={() => removeinCart(item)} className="remove-button  ">
        <TrashIcon color="rgb(145, 45, 32)" width={20} />
      </div>
    </div>
  );
};
