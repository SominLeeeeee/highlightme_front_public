import React from "react";
import { GoogleLogin } from "react-google-login";
import config from "../../configs";
import { useHistory } from "react-router-dom";
import { useRecoilState } from "recoil";
import { atomSignUp, atomUserInfo, atomMenu } from "../../recoil/userStore";

function GoogleLoginButton(props) {
  const { usage } = { ...props };

  const history = useHistory();
  const [userInfo, setUserInfo] = useRecoilState(atomUserInfo);
  const [signUp, setSignUp] = useRecoilState(atomSignUp);
  const [menu, setMenu] = useRecoilState(atomMenu);

  const googleBtnOnClick = async (response) => {
    console.log(response);
    const res = await fetch(`${config.URL}/api/users/oauth/google`, {
      method: "POST",
      credentials: "include",
      body: new URLSearchParams({
        email: response.profileObj.email,
        googleId: response.googleId,
        accessToken: response.accessToken,
      }),
    });

    const data = await res.json();

    setUserInfo({
      id: data.user_id,
      email: data.email,
      accessToken: response.accessToken,
    });

    if (data.isNew) {
      setSignUp({ signUpLevel: 0 });
      history.push("/signup_info");
    } else {
      setMenu(0);
      history.push("/find");
    }
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
    marginBottom: "2rem",
  };

  const googleLoginSimpleStyle = {
    backgroundColor: "white",
    border: "none",
    fontFamily: "AppleSDGothicNeo-Regular",
    fontSize: "16px",
  };

  return (
    <GoogleLogin
      clientId="568158562597-qu7pvd53laqmvfsas5bihd5k1lk53c3s.apps.googleusercontent.com"
      render={(renderProps) =>
        usage === "signup" ? (
          <button style={googleLoginButtonStyle} onClick={renderProps.onClick}>
            <img
              src="/images/btn-google-signin.png"
              style={{ width: "24px", height: "24px", marginRight: "8px" }}
            ></img>
            구글 계정으로 간편하게 시작하기
          </button>
        ) : (
          <button style={googleLoginSimpleStyle} onClick={renderProps.onClick}>
            <u>이미 가입했어요!</u>
          </button>
        )
      }
      onSuccess={googleBtnOnClick}
      onFailure={googleBtnOnClick}
      cookiePolicy={"single_host_origin"}
      //isSignedIn={true}
    />
  );
}

export default GoogleLoginButton;
