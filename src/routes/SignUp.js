import React from "react";
import "../style/signup.scss";
import ShadowBoxLarge from "../components/ShadowBoxLarge";
import SignUpInfo from "../components/SignUpInfo";
import { useSelector } from "react-redux";
import SignUpComplete from "../components/SignUpComplete";
import { useRecoilState } from "recoil";
import { atomUserInfo } from "../recoil/userStore";

function SignUp() {
  const [userInfo, setUserInfo] = useRecoilState(atomUserInfo);

  return (
    <div className="signUpParent">
      <img src="/images/ic-sign-logo.svg" id="logo"></img>
      <ShadowBoxLarge>
        {useSelector((state) => state.signUpLevel) ? (
          <SignUpComplete />
        ) : (
          <SignUpInfo email={userInfo.email} />
        )}
      </ShadowBoxLarge>
    </div>
  );
}

export default SignUp;
