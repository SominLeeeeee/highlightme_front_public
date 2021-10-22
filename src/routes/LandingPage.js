import React from "react";
import "./landingPage.scss";
import GoogleLoginButton from "../components/SignUp/GoogleLoginButton";
import HighlightText from "../components/atom/HighlightText";

import { useHistory } from "react-router-dom";
import { useRecoilState } from "recoil";
import { atomSignUp, atomUserInfo } from "../recoil/userStore";
import { postUsersOauthGoogle } from "../apis/users";

function LandingPage() {
  const history = useHistory();
  const [userInfo, setUserInfo] = useRecoilState(atomUserInfo);
  const [signUp, setSignUp] = useRecoilState(atomSignUp);

  /**
   * 우리 서버로 정보를 보내서 로그인 처리 한 뒤, 성공한 경우 값을 저장하고 페이지를 이동함
   * status가 200이 오면 신규 회원가입, 409가 오면 로그인이므로 적합한 페이지로 이동
   * @param {String} email
   * @param {String} googleId
   * @param {String} accessToken
   */
  const onLoginSuccess = async (email, googleId, accessToken) => {
    const [result, status] = await postUsersOauthGoogle(
      email,
      googleId,
      accessToken
    );

    if (status === 200 || status === 409) {
      setUserInfo({
        id: result.user_id,
        email: result.email,
        accessToken: accessToken,
      });

      if (status === 200) {
        setSignUp({ signUpLevel: 0 });
        history.push("/signup");
      } else history.push("/find");
    } else {
      alert("서버 문제로 로그인에 실패했어요 🤕");
    }
  };

  const onLoginFail = () => {
    alert("Google 서버 문제로 로그인에 실패했어요 🤕");
  };

  return (
    <div className="gotoSignUpWrapper">
      <div className="gotoSignUp">
        <img id="signupQuotation" src="/images/ic-quotation.svg" />
        <p id="signupPhrase1">
          자기소개서로
          <br />
          나에게 맞는 질문을
          <br />
          예상 받아보세요
        </p>
        <p id="signupPhrase2">
          이제 면접 대비는{" "}
          <HighlightText
            fontSize="3rem"
            marginBottom="0"
            fontFamily="AppleSDGothicNeo-ExtraBold"
            text="하이라이트미"
          />
        </p>

        <GoogleLoginButton
          usage="signup"
          onLoginSuccess={onLoginSuccess}
          onLoginFail={onLoginFail}
        />
        <GoogleLoginButton
          usage="login"
          onLoginSuccess={onLoginSuccess}
          onLoginFail={onLoginFail}
        />
      </div>

      <p id="signupAgree">
        간편하게 시작하기를 통해 <b>서비스 이용약관</b>과{" "}
        <b>개인정보처리방침</b>에 동의합니다.
      </p>
    </div>
  );
}

export default LandingPage;
