import React, { useEffect } from "react";
import { useHistory } from "react-router-dom";
import { useRecoilState } from "recoil";
import { atomSignUp, atomUserInfo } from "../recoil/userStore";
import { isUserValid } from "../utils";

function Home() {
  const history = useHistory();
  const [userInfo, setUserInfo] = useRecoilState(atomUserInfo);

  useEffect(() => {
    //1차 출시 시점까지 메인페이지로 사용되기 때문에
    //로그인 여부를 체크하고 다른 페이지로 넘길지 확인
    if (isUserValid(userInfo)) {
      history.push("/find");
    } else {
      history.push("/signup");
    }
  }, []);

  return <div></div>;
}

export default Home;
