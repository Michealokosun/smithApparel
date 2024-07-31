import { useState } from "react";
import {
  createusedocumentfromauth,
  signInWithPopUp,
  signinWithPasswordAndEmail,
} from "../utils/firbase/firebase.utils";
import { Forminput } from "./forminput.component";
import "../styles/signinAndsignup.styles.scss";
import { Button } from "./button.component";
const defaultdata = {
  displayName: "",
  email: "",
  password: "",
  confirmpassword: "",
};
const Signinform = () => {
  const [formdata, setformdata] = useState(defaultdata);
  const [Loading, setloading] = useState(false);
  const { password, email } = formdata;
  const handlechange = (e) => {
    e.preventDefault();
    const { name, value } = e.target;
    setformdata({ ...formdata, [name]: value });
  };

  const handsubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await signinWithPasswordAndEmail(email, password);
      console.log(res);
    } catch (error) {
      switch (error.code) {
        case "auth/wrong-passowrd":
          alert("incorret password");

          break;
        case "auth/invalid-credential":
          alert("user not found");
          break;

        default:
          console.log(error);
      }
    }
  };

  const handeGoogleSignIn = async () => {
    setloading(true);
    const { user } = await signInWithPopUp();
    await createusedocumentfromauth(user);
    setloading(false);
  };

  return (
    <div className="sign-up-container">
      <h2>I already have an account</h2>
      <span>Sign in with your email and password</span>
      <form onSubmit={handsubmit}>
        <Forminput
          value={formdata.email}
          onChange={handlechange}
          name="email"
          type="email"
          required
          label="email"
        />
        <Forminput
          label="password"
          value={formdata.password}
          onChange={handlechange}
          name="password"
          type="password"
          required
        />

        <div className="buttons-container">
          <Button type="submit" buttontype="inverted">
            Sign In
          </Button>
          <Button
            onClick={handeGoogleSignIn}
            type="button"
            buttontype="google_sign_in"
          >
            {Loading ? "Loading..." : "sign in with google"}
          </Button>
        </div>
      </form>
    </div>
  );
};

export default Signinform;
