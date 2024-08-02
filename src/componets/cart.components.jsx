import React, { useContext } from "react";
import { ReactComponent as Shoppingbag } from "../assest/images/shopping-bag.svg";
import "../styles/cart-icon.styles.scss";
import { cartcontex } from "../contexApi/cart-contex";

export default function CartIcon() {
  const { setIsCartOpen, isCartOpen, carttotal } = useContext(cartcontex);
  const togglecart = () => setIsCartOpen(!isCartOpen);
  return (
    <div className="cart-icon-container" onClick={togglecart}>
      <Shoppingbag className="shopping-icon " />
      <div className="item-count">{carttotal}</div>
    </div>
  );
}
