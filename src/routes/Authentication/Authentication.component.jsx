import Signinform from "../../componets/signin.component";
import SignUpform from "../../componets/signupform.component";
import "../../styles/Athentication.styles.scss";
export default function Authenticationpage() {
  return (
    <div className="loginpage">
      <Signinform />

      <SignUpform />
    </div>
  );
}
