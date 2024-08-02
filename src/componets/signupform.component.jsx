import { useState } from "react";
import toast from "react-hot-toast";
import {
  createAuthWithPasswordAndEmail,
  createusedocumentfromauth,
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
const SignUpform = () => {
  const [formdata, setformdata] = useState(defaultdata);
  const { displayName, password, email, confirmpassword } = formdata;
  const [loading, setloading] = useState(false);
  const handlechange = (e) => {
    e.preventDefault();
    const { name, value } = e.target;
    setformdata({ ...formdata, [name]: value });
  };

  const handsubmit = async (e) => {
    e.preventDefault();
    if (password !== confirmpassword) return;

    try {
      setloading(true);
      const { user } = await createAuthWithPasswordAndEmail(email, password);
      await createusedocumentfromauth(user, { displayName });
      toast.success("User created successfully");
      setloading(false);
    } catch (error) {
      if (error.code === "auth/email-already-in-use") {
        toast.error("email-already-in-use");
      } else {
        console.log(error.message);
      }
    }
  };

  return (
    <div className="sign-up-container">
      <h2>Don't have anaccount?</h2>
      <span>Sign up with your email and password</span>
      <form onSubmit={handsubmit}>
        <Forminput
          label="username"
          onChange={handlechange}
          value={formdata.displayName}
          name="displayName"
          type="text"
        />
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
        <Forminput
          label="confirm"
          value={formdata.confirmpassword}
          onChange={handlechange}
          name="confirmpassword"
          type="password"
          required
        />
        <Button type="submit" buttontype="inverted">
          {loading ? "Loading..." : "Sign Up"}
        </Button>
      </form>
    </div>
  );
};

export default SignUpform;
