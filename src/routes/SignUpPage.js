import React from "react";
import "./signUpPage.scss";
import ShadowBoxLarge from "../components/atom/ShadowBoxLarge";
import SignUpInfo from "../components/SignUp/SignUpInfo";
import { useSelector } from "react-redux";
import SignUpComplete from "../components/SignUp/SignUpComplete";
import { useRecoilState } from "recoil";
import { atomUserInfo, atomSignUp } from "../recoil/userStore";

function SignUpPage() {
  const [userInfo, setUserInfo] = useRecoilState(atomUserInfo);
  const [signUp, setSignUp] = useRecoilState(atomSignUp);

  return (
    <div className="signUpParent">
      <img src="/images/ic-sign-logo.svg" id="logo"></img>
      <ShadowBoxLarge>
        {signUp.signUpLevel && userInfo ? (
          <SignUpComplete />
        ) : (
          <SignUpInfo email={userInfo.email} />
        )}
      </ShadowBoxLarge>
    </div>
  );
}

export default SignUpPage;
