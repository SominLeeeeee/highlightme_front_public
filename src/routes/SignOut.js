import React, { useEffect } from "react";
import { useHistory } from "react-router-dom";
import { useRecoilState } from "recoil";
import { atomSignUp, atomUserInfo } from "../recoil/userStore";

function SignOut() {
  const history = useHistory();
  const [userInfo, setUserInfo] = useRecoilState(atomUserInfo);

  useEffect(() => {
    setUserInfo({
      id: undefined,
      email: undefined,
      accessToken: undefined,
    });

    history.push("/");
  }, []);

  return <div></div>;
}

export default SignOut;
