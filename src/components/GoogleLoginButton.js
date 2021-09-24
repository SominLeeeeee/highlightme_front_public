import React from "react";
import { GoogleLogin } from "react-google-login";
import config from "../configs";
import { Redirect, useHistory } from "react-router-dom";
import { useDispatch } from "react-redux";
import { SIGN_UP, SIGN_UP_REGISTER } from "../store";
import { useRecoilState } from "recoil";
import { atomSignUp, atomUserInfo } from "../recoil/userStore";
import produce from "immer";

function GoogleLoginButton() {
  const history = useHistory();
  const dispatch = useDispatch();
  const [userInfo, setUserInfo] = useRecoilState(atomUserInfo);
  const [signUp, setSignUp] = useRecoilState(atomSignUp);

  const googleBtnOnClick = async (response) => {
    const alreadySignUp = await fetch(`${config.URL}/api/users/oauth/google`, {
      method: "POST",
      body: new URLSearchParams({
        email: response.profileObj.email,
        googleId: response.googleId,
        accessToken: response.accessToken,
      }),
    })
      .then((res) => res.json())
      .then((res) => {
        setUserInfo((prev) =>
          produce(prev, (draft) => {
            draft.id = res.googleId;
            draft.email = res.email;
            draft.accessToken = response.accessToken;
          })
        );
      });

    console.log("회원가입 결과", alreadySignUp);
    // dispatch({ type: SIGN_UP, email });
    setSignUp({ signUpLevel: 0 });
    history.push("/signup_info");
  };

  // const googleBtnOnClick = async () => {
  //   console.log("aaa");
  //   const alreadySignUp = await fetch(`${config.URL}/api/users/oauth/google`, {
  //     method: "GET",
  //   });

  //   console.log(alreadySignUp);
  //   // dispatch({ type: SIGN_UP, email });
  //   dispatch({ type: SIGN_UP_REGISTER, level: 0 });
  //   history.push("/signup_info");
  // };

  const googleLoginButtonStyle = {
    backgroundColor: "white",
    borderRadius: "3.2rem",
    border: "none",
    boxShadow: "0rem 0.4rem 0.8rem #0000001A",
    fontFamily: "AppleSDGothicNeo-Bold",
    fontSize: "20px",
    padding: "2rem 3rem",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  };

  return (
    <GoogleLogin
      clientId="568158562597-qu7pvd53laqmvfsas5bihd5k1lk53c3s.apps.googleusercontent.com"
      render={(renderProps) => (
        <button style={googleLoginButtonStyle} onClick={renderProps.onClick}>
          <img
            src="/images/btn-google-signin.png"
            style={{ width: "24px", height: "24px", marginRight: "8px" }}
          ></img>
          구글 계정으로 간편하게 시작하기
        </button>
      )}
      onSuccess={googleBtnOnClick}
      onFailure={googleBtnOnClick}
      cookiePolicy={"single_host_origin"}
      // isSignedIn={true}
    />
    // <button onClick={googleBtnOnClick} style={googleLoginButtonStyle}>
    //   <img
    //     src="/images/btn-google-signin.png"
    //     style={{ width: "24px", height: "24px", marginRight: "8px" }}
    //   />
    //   구글 계정으로 간편하게 시작하기
    // </button>
  );
}

export default GoogleLoginButton;
