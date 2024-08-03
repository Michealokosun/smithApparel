import { createContext, useEffect, useState } from "react";
import { getDocumentFromDb } from "../utils/firbase/firebase.utils";
// import { SHOP_DATA } from "../shop-data";
export const productcontext = createContext({
  collection: {},
});

export const CollectionProvider = ({ children }) => {
  // eslint-disable-next-line no-unused-vars
  const [collection, setCollection] = useState({});
  useEffect(() => {
    // FETCH DATA FROM THE DATABASE
    const fetchdata = async () => {
      const data = await getDocumentFromDb();
      setCollection(data);
    };

    fetchdata();
  }, []);
  const value = {
    collection,
  };
  return (
    <productcontext.Provider value={value}>{children}</productcontext.Provider>
  );
};
