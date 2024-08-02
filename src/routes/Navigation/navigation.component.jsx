import React, { useContext } from "react";
import { Outlet, Link } from "react-router-dom";
import logo from "../../assest/images/007 crown.svg";
import "../../styles/navigation.styles.scss";
import { usercontxt } from "../../contexApi/Authentication-context";
import { Signout } from "../../utils/firbase/firebase.utils";
import toast from "react-hot-toast";
import { CartDropDown } from "../../componets/cart-dropdown.component";
import CartIcon from "../../componets/cart.components";
import { cartcontex } from "../../contexApi/cart-contex";
export default function NavigationBar() {
  const { currentuser } = useContext(usercontxt);
  const { isCartOpen } = useContext(cartcontex);

  const handlesignout = async () => {
    // eslint-disable-next-line no-unused-vars
    const res = await Signout();
    toast.success("sign out successful");
  };
  return (
    <>
      <div>
        <div className="navigation">
          {isCartOpen && <CartDropDown />}
          <Link to="/">
            <div className="logo-container">
              <img src={logo} alt="" />
            </div>
          </Link>
          <div className="nav-links-container">
            <Link to="/shop" className="nav-link">
              Shop
            </Link>
            {currentuser ? (
              <span onClick={handlesignout} className="nav-link">
                Sign Out
              </span>
            ) : (
              <Link to="/Sign-in" className="nav-link">
                Sign In
              </Link>
            )}

            <CartIcon />
          </div>
        </div>
        <div className="pages">
          <Outlet />
        </div>
      </div>
    </>
  );
}
