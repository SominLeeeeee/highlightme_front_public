import React from "react";
import { GoogleLogin } from "react-google-login";
import config from "../configs";
import { Redirect, useHistory } from "react-router-dom";

function GoogleLoginButton() {
  const history = useHistory();

  const responseGoogle = async (response) => {
    console.log(response);

    /* TODO - 서버에 회원 정보를 보내고 가입이 되어있는지 확인하기 */
    // const alreadySignUp = await fetch(`${config.URL}/api/users/oauth/google`, {
    //   method: "POST",
    //   body: new URLSearchParams({
    //     email: response.profileObj.email,
    //     type: "google",
    //     tokenId: response.tokenId,
    //   }),
    // });

    // console.log(alreadySignUp);
    history.push("/signup");
  };

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
      onSuccess={responseGoogle}
      onFailure={responseGoogle}
      cookiePolicy={"single_host_origin"}
      // isSignedIn={true}
    />
  );
}

export default GoogleLoginButton;
