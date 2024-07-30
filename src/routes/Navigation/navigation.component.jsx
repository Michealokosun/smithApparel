import React from "react";
import { Outlet, Link } from "react-router-dom";
import logo from "../../assest/images/007 crown.svg";
import "../../styles/navigation.styles.scss";

export default function NavigationBar() {
  return (
    <>
      <div>
        <div className="navigation">
          <Link to="/">
            <div className="logo-container">
              <img src={logo} alt="" />
            </div>
          </Link>
          <div className="nav-links-container">
            <Link to="/shop" className="nav-link">
              Shop
            </Link>
            <Link to="/Sign-in" className="nav-link">
              Sign In
            </Link>
          </div>
        </div>
        <div className="pages">
          <Outlet />
        </div>
      </div>
    </>
  );
}
