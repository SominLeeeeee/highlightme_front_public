import React from "react";
import "../style/signup.scss";
import ShadowBoxLarge from "../components/ShadowBoxLarge";
import SignUpInfo from "../components/SignUpInfo";

function SignUp() {
  return (
    <div className="signUpParent">
      <img src="/images/ic-sign-logo.svg" id="logo"></img>
      <ShadowBoxLarge>
        <SignUpInfo />
      </ShadowBoxLarge>
    </div>
  );
}

export default SignUp;
