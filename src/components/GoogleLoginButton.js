import React from "react";
import { GoogleLogin } from "react-google-login";

function GoogleLoginButton() {
  function attachSignin() {}

  const responseGoogle = (response) => {
    console.log(response);
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
    />
  );
}

export default GoogleLoginButton;
