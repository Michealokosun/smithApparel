import Signinform from "../../componets/signin.component";
import SignUpform from "../../componets/signupform.component";
import "../../styles/Athentication.styles.scss";
import { Toaster } from "react-hot-toast";
export default function Authenticationpage() {
  return (
    <div className="loginpage">
      <Toaster />

      <Signinform />

      <SignUpform />
    </div>
  );
}
