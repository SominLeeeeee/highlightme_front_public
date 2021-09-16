import React from "react";
import "../style/signup.scss";
import ShadowBoxLarge from "../components/ShadowBoxLarge";
import SignUpInfo from "../components/SignUpInfo";
import { useSelector } from "react-redux";
import SignUpComplete from "../components/SignUpComplete";

function SignUp() {
  return (
    <div className="signUpParent">
      <img src="/images/ic-sign-logo.svg" id="logo"></img>
      <ShadowBoxLarge>
        {useSelector((state) => state.signUpLevel) ? (
          <SignUpComplete />
        ) : (
          <SignUpInfo />
        )}
      </ShadowBoxLarge>
    </div>
  );
}

export default SignUp;
