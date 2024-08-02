import React, { useContext } from "react";
import { Button } from "./button.component";
import { useNavigate } from "react-router-dom";
import "../styles/004 cart-dropdown.styles.scss";
import { Cartitem } from "./cart-item.component";
import { cartcontex } from "../contexApi/cart-contex";
//
//
//
//
export const CartDropDown = () => {
  const gotocheckout = useNavigate();
  const { cartitem } = useContext(cartcontex);
  return (
    <div className="cart-dropdown-container">
      <div className="cart-items ">
        {cartitem.map((item) => (
          <>
            <Cartitem key={item.price} item={item} />
          </>
        ))}
      </div>
      <Button onClick={() => gotocheckout("/checkout")} buttontype="inverted">
        go to checkout
      </Button>
    </div>
  );
};
