import React from "react";
import "./signup.scss";
import ShadowBoxLarge from "../components/atom/ShadowBoxLarge";
import SignUpInfo from "../components/SignUpInfo";
import { useSelector } from "react-redux";
import SignUpComplete from "../components/SignUpComplete";
import { useRecoilState } from "recoil";
import { atomUserInfo, atomSignUp } from "../recoil/userStore";

function SignUp() {
  const [userInfo, setUserInfo] = useRecoilState(atomUserInfo);
  const [signUp, setSignUp] = useRecoilState(atomSignUp);

  return (
    <div className="signUpParent">
      <img src="/images/ic-sign-logo.svg" id="logo"></img>
      <ShadowBoxLarge>
        {signUp.signUpLevel ? (
          <SignUpComplete />
        ) : (
          <SignUpInfo email={userInfo.email} />
        )}
      </ShadowBoxLarge>
    </div>
  );
}

export default SignUp;
