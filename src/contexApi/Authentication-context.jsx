import { createContext, useEffect, useState } from "react";
import {
  createusedocumentfromauth,
  onAuthstatechange,
} from "../utils/firbase/firebase.utils";

export const usercontxt = createContext({
  currentuser: null,
  setcurrentuser: () => null,
});

export const UserProvider = ({ children }) => {
  const [currentuser, setcurrentuser] = useState(null);
  const value = {
    currentuser,
    setcurrentuser,
  };

  useEffect(() => {
    const unsubscribe = onAuthstatechange((user) => {
      if (user) {
        createusedocumentfromauth(user);
      }
      setcurrentuser(user);
    });

    return () => unsubscribe;
  }, []);
  return <usercontxt.Provider value={value}>{children}</usercontxt.Provider>;
};
