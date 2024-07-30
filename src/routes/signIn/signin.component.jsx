import React from "react";
import {
  createusedocumentfromauth,
  signInWithPopUp,
} from "../../utils/firbase/firebase.utils";

export default function SignIn() {
  const loggoogleuser = async () => {
    const { user } = await signInWithPopUp();
    createusedocumentfromauth(user);
    console.log(user);
  };
  return (
    <div>
      <h1>sign in page</h1>
      <button onClick={loggoogleuser}>sigin in with google</button>
    </div>
  );
}
