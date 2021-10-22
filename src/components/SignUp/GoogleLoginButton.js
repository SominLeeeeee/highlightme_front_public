import React from "react";
import { GoogleLogin } from "react-google-login";
import config from "../../configs";

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
  marginBottom: "2rem",
};

const googleLoginSimpleStyle = {
  backgroundColor: "white",
  border: "none",
  fontFamily: "AppleSDGothicNeo-Regular",
  fontSize: "16px",
};

function GoogleLoginButton({ usage, onLoginSuccess, onLoginFail }) {
  console.log(process.env.REACT_APP_OAUTH_GOOGLE_CLIENT_ID);
  return (
    <GoogleLogin
      clientId={config.oauthGoogleClientId}
      render={(renderProps) =>
        usage === "signup" ? (
          <button style={googleLoginButtonStyle} onClick={renderProps.onClick}>
            <img
              src="/images/btn-google-signin.png"
              style={{ width: "24px", height: "24px", marginRight: "8px" }}
            />
            구글 계정으로 간편하게 시작하기
          </button>
        ) : (
          <button style={googleLoginSimpleStyle} onClick={renderProps.onClick}>
            <u>이미 가입했어요!</u>
          </button>
        )
      }
      onSuccess={(res) =>
        onLoginSuccess(res.profileObj.email, res.googleId, res.accessToken)
      }
      onFailure={onLoginFail}
      cookiePolicy={"single_host_origin"}
      //isSignedIn={true}
    />
  );
}

export default GoogleLoginButton;
