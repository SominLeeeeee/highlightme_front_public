import React, { useEffect } from "react";
import config from "../configs";
import { useHistory } from "react-router-dom";
import { useRecoilState } from "recoil";
import { atomUserInfo } from "../recoil/userStore";

function SignOut() {
  const history = useHistory();
  const [userInfo, setUserInfo] = useRecoilState(atomUserInfo);

  const signOut = async () => {
    const result = await fetch(`${config.url}/api/users/logout`, {
      method: "GET",
      credentials: "include",
    });

    // 원래는 401도 실패이지만, 백엔드에서 세션을 디스크에 저장하기 전까지는 예외로 유지함
    // 서버가 재시작 되는 경우 사용자가 로그아웃할 수 없기 때문임
    if (result.status === 200 || result.status === 401) {
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
