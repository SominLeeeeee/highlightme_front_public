import React from "react";
import { GoogleLogin } from "react-google-login";
import config from "../../configs";
import { useHistory } from "react-router-dom";
import { useRecoilState } from "recoil";
import { atomSignUp, atomUserInfo } from "../../recoil/userStore";
import { isUserValid } from "../../utils";
import { postUsersOauthGoogle } from "../../apis/users";

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

function GoogleLoginButton({ usage }) {
  const history = useHistory();
  const [userInfo, setUserInfo] = useRecoilState(atomUserInfo);
  const [signUp, setSignUp] = useRecoilState(atomSignUp);

  const onGoogleOauthSuccess = async (res) => {
    const data = await postUsersOauthGoogle(
      res.profileObj.email,
      res.googleId,
      res.accessToken
    );

    setUserInfo({
      id: data.user_id,
      email: data.email,
      accessToken: res.accessToken,
    });

    if (data.isNew) {
      setSignUp({ signUpLevel: 0 });
      history.push("/signup");
    } else history.push("/find");
  };

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
      onSuccess={onGoogleOauthSuccess}
      onFailure={onGoogleOauthSuccess}
      cookiePolicy={"single_host_origin"}
      //isSignedIn={true}
    />
  );
}

export default GoogleLoginButton;
