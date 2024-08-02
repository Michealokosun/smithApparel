import React, { useContext } from "react";
import "../../styles/checkout.styles.scss";
import { useNavigate } from "react-router-dom";
import { cartcontex } from "../../contexApi/cart-contex";
import { Checkoutitem } from "../../componets/checkoutitem.component";
const CheckoutPage = () => {
  const { cartitem, totalprice } = useContext(cartcontex);
  const navigate = useNavigate();

  if (cartitem.length === 0) {
    navigate("/shop");
  }

  return (
    <div className="checkout-container">
      <div className="checkout-header">
        <p>Product</p>
        <p>Description</p>
        <p>Quantity</p>
        <p>Price</p>
        <p>Remove</p>
      </div>

      <div className="checkout-items">
        {cartitem.map((item) => (
          <Checkoutitem item={item} />
        ))}
      </div>

      <div className="total">
        <p>Total: ${totalprice}</p>
      </div>
    </div>
  );
};

export default CheckoutPage;
