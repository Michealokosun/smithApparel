import { createContext, useEffect, useState } from "react";
import toast from "react-hot-toast";
///  HELPER FUNCTIONS
///
/// ADDS ITEM TO THE CART AND INCREASE THE QUANNTITY IF ITEM EXISTS
///
///
const addtocart = (cartitem, producToAdd) => {
  const findproductindex = cartitem.find((item) => item.id === producToAdd.id);
  if (findproductindex) {
    return cartitem.map((item) =>
      item.id === findproductindex.id
        ? { ...producToAdd, qnty: (item.qnty += 1) }
        : item
    );
  }

  return [...cartitem, { ...producToAdd, qnty: 1 }];
};
//
//
/// DELETES ITEM FRON THE CART USING THE X BUTTON
//
//
const deleteItemFromCart = (cartitem, producToRemove) => {
  const filer = cartitem.filter((item) => {
    return item.id !== producToRemove.id;
  });

  return filer;
};

//
//

//
//
function reduceitemincart(cartitem, producToReduce) {
  const findindex = cartitem.find((item) => item.id === producToReduce.id);

  if (findindex.qnty === 1) {
    const filter = cartitem.filter((item) => {
      return item.id !== findindex.id;
    });

    return filter;
  }

  const index = cartitem.map((item) => {
    return item.id === findindex.id
      ? { ...findindex, qnty: (item.qnty -= 1) }
      : item;
  });

  return index;
}
//
//
export const cartcontex = createContext({
  isCartOpen: false,
  cartitem: [],
  carttotal: 0,
  totalprice: 0,
  setIsCartOpen: () => {},
  addItemToCart: () => {},
  removeinCart: () => {},
  reducefromCart: () => {},
});

export const CartProvider = ({ children }) => {
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [cartitem, setcartitem] = useState([]);
  const [carttotal, setcarttotal] = useState(0);
  const [totalprice, settotalprice] = useState(0);

  //
  //  GETS THE THE CART ITEMS IN THE CART
  useEffect(() => {
    const carttotal = cartitem.reduce((acc, current) => {
      return acc + current.qnty;
    }, 0);

    setcarttotal(carttotal);
  }, [cartitem]);
  //
  //  GETS THE TOTOAL PRICE OF ITEMS IN THE CART
  useEffect(() => {
    const carttotalprice = cartitem.reduce((acc, current) => {
      return acc + current.qnty * current.price;
    }, 0);

    settotalprice(carttotalprice);
  }, [cartitem]);
  //
  const addItemToCart = (producToAdd) => {
    setcartitem(addtocart(cartitem, producToAdd));
  };
  //
  const removeinCart = (producToRemove) => {
    setcartitem(deleteItemFromCart(cartitem, producToRemove));
    toast.success("removed");
  };
  //
  const reducefromCart = (producToRemove) => {
    setcartitem(reduceitemincart(cartitem, producToRemove));
  };
  //
  const value = {
    isCartOpen,
    setIsCartOpen,
    cartitem,
    carttotal,
    addItemToCart,
    totalprice,
    reducefromCart,
    removeinCart,
  };
  return <cartcontex.Provider value={value}>{children}</cartcontex.Provider>;
};
