import React, { useEffect } from "react";
import config from "../configs";
import { useHistory } from "react-router-dom";
import { useRecoilState } from "recoil";
import { atomUserInfo } from "../recoil/userStore";

function SignOut() {
  const history = useHistory();
  const [userInfo, setUserInfo] = useRecoilState(atomUserInfo);

  const signOut = async () => {
    const result = await fetch(`${config.URL}/api/users/logout`, {
      method: "GET",
      credentials: "include",
    });

    if (result.status === 200) {
      setUserInfo({
        id: undefined,
        email: undefined,
        accessToken: undefined,
      });
      history.push("/");
    } else {
      alert("서버 문제로 로그아웃에 실패했어요 🤒");
    }
  };

  useEffect(() => {
    signOut();
  }, []);

  return <></>;
}

export default SignOut;
